import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import tw from 'twin.macro';
import MoonLoader from 'react-spinners/MoonLoader';

import { ICar } from '../../../typings/car';
import { Car } from '../../componenets/car';
import { SCREENS } from '../../componenets/responsive/responsive';
import { setTopCars } from '../../reducer/homePage';
import carService from '../../service/carService';
import { makeSelectTopCars } from './selectors';

const TopCarsContianer = styled.div`
  ${tw`
		max-w-screen-lg
		w-full
		flex
		flex-col
		items-center
		justify-center
		pr-4
		pl-4
		md:pr-0
		md:pl-0
		mb-10
	`}
`;

const Title = styled.h2`
  ${tw`
		font-extrabold
		text-black
		text-xl
		lg:text-5xl
	`}
`;

const CarsContainer = styled.div`
  ${tw`
		w-full
		flex
		flex-wrap
		justify-center
		mt-7
		md:mt-10
	`}
`;

const NoCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-xl
    text-gray-500
    mt-11
    mb-11
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-xl
    text-black
    mt-9
  `}
`;

const actionSetTopCart = (dispatch: Dispatch) => ({
  setTopCars: (cars: ICar) => dispatch(setTopCars(cars)),
});

const selectTopCars = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { setTopCars } = actionSetTopCart(useDispatch());
  const { topCars } = useSelector(selectTopCars);

  useEffect(() => {
    const fetchTopCars = async () => {
      setLoading(true);
      const cars = await carService
        .getCars()
        .catch((err) => console.error(err));
      if (cars) setTopCars(cars);
    };
    fetchTopCars();
    setLoading(false);
  }, [setTopCars]);
  const cars = topCars.map((car) => <Car {...car} />);

  if (!cars || cars.length === 0) {
    return <NoCars>There is no car to show!</NoCars>;
  }

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContianer>
      <Title>Explore Our Top Deals.</Title>
      {loading && (
        <LoadingContainer>
          <MoonLoader />
        </LoadingContainer>
      )}
      {!loading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              'clickToChange',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  'clickToChange',
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              1024: {
                plugins: [
                  'clickToChange',
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContianer>
  );
}
