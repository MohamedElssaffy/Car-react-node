import styled from 'styled-components';
import tw from 'twin.macro';

import BlobImg from '../../../assets/images/blob.svg';
import CarImg from '../../../assets/images/mclaren-orange-big.png';
import { Button } from '../../componenets/button';
import { SCREENS } from '../../componenets/responsive/responsive';

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
		w-full
		max-w-screen-2xl
		flex
		justify-between
		pl-3
		pr-3
		lg:pl-12
		lg:pr-12
	`}
`;

const LeftContainer = styled.div`
  ${tw`
		w-1/2
		flex
		flex-col
	`}
`;

const RightContainer = styled.div`
  ${tw`
		w-1/2
		flex
		flex-col
		mt-20
		relative
	`}
`;

const Slogan = styled.h1`
  ${tw`
		mb-4
		font-bold
		text-2xl
		sm:text-3xl
		sm:leading-snug
		md:text-5xl
		md:font-extrabold
		lg:font-black
		lg:leading-normal
		xl:text-6xl
		xl:leading-relaxed
	`}
`;

const Description = styled.p`
  ${tw`
		text-xs
		sm:max-h-full
		lg:text-sm
		xl:text-lg
		overflow-hidden
		max-h-12
		text-gray-800
	`}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    top: -16em;
    right: -9em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    top: -15em;
    right: -7em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    top: -25em;
    right: -15em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  position: absolute;
  top: -6em;
  right: -5em;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
		flex
		flex-wrap
		mt-3
	`}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Qulity Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
        <ButtonsContainer>
          <Button text='Book Your Ride' />
          <Button theme='filled' text='Sell Your Car' />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt='bg' />
        </BlobContainer>
        <StandaloneCar>
          <img src={CarImg} alt='car' />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
