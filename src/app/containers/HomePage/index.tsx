import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../componenets/BookCard';
import { Marginer } from '../../componenets/marginer';
import { Navbar } from '../../componenets/navbar';
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
    </PageContainer>
  );
}
