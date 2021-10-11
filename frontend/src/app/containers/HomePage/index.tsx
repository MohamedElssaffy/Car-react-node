import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../componenets/BookCard';
import { Footer } from '../../componenets/footer';
import { Marginer } from '../../componenets/marginer';
import { Navbar } from '../../componenets/navbar';
import { AboutUs } from './AboutUs';
import { BookingSteps } from './BookingSteps';
import { TopCars } from './TopCars';
import { TopSection } from './TopSection';

const PageContainer = styled.div`
  ${tw`
		flex
		flex-col
		items-center
		w-full
		h-full
		overflow-x-hidden
	`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction='vertical' margin='6em' />
      <BookCard />
      <Marginer direction='vertical' margin='8em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='5em' />
      <AboutUs />
      <Marginer direction='vertical' margin='5em' />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
