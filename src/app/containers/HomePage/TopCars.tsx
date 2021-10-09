import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useState } from 'react';

import '@brainhubeu/react-carousel/lib/style.css';
import { ICar } from '../../../typings/car';
import { Car } from '../../componenets/car';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../componenets/responsive/responsive';

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

export function TopCars() {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testCar: ICar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar2: ICar = {
    name: 'HONDA cITY 5 Seater Car',
    mileage: '20k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContianer>
      <Title>Explore Our Top Deals.</Title>
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
    </TopCarsContianer>
  );
}
