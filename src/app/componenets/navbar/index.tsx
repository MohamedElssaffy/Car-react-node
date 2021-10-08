import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import { NavItems } from './NavItems';

const NavContainer = styled.div`
  ${tw`
		w-full
		max-w-screen-2xl
		flex
		flex-row
		items-center
		justify-between
		lg:pl-12
		lg:pr-12

	`}
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavContainer>
  );
}
