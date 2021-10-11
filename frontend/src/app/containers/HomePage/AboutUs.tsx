import styled from 'styled-components';
import tw from 'twin.macro';

import { SCREENS } from '../../componenets/responsive/responsive';
import JeepCar from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
  ${tw`
		w-full
		flex
		flex-wrap
		items-center
		justify-center
		pt-4
		pb-4
		pl-7
		pr-7
		md:pl-0
		md:pr-0
		bg-white
	`}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
		md:w-1/2
		flex
		flex-col
		md:ml-6

	`}
`;

const InfoTitle = styled.h2`
  ${tw`
		text-black
		text-2xl
		md:text-5xl
		font-extrabold
		md:font-black
		md:leading-normal
	`}
`;

const InfoText = styled.p`
  ${tw`
		max-w-2xl
		text-sm
		md:text-base
		text-gray-500
		font-normal
		mt-4
	`}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepCar} alt='Jeep Car' />
      </CarContainer>
      <InfoContainer>
        <InfoTitle>Fell The Best Experience With Our Rental Deals</InfoTitle>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quidem
          alias repudiandae, vel culpa ut obcaecati porro, magni error veritatis
          aliquid? Minima nesciunt adipisci ut quia maxime quo repellat
          suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Enim quidem alias repudiandae, vel culpa ut obcaecati porro, magni
          error veritatis aliquid? Minima nesciunt adipisci ut quia maxime quo
          repellat suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Enim quidem alias repudiandae, vel culpa ut obcaecati porro,
          magni error veritatis aliquid? Minima nesciunt adipisci ut quia maxime
          quo repellat suscipit.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
