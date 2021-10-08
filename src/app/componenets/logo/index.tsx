import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../assets/images/car-logo.png';

const LogoContainer = styled.div`
  ${tw`
	flex
	items-center
	`}
`;

const LogoText = styled.div`
  ${tw`
	text-xl
	md: text-2xl
	font-bold
	text-black
	m-1
	`}
`;

const LogoImg = styled.div`
  ${tw`
	h-6
	md: h-9
	`}
  width: auto;

  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <LogoImg>
        <img src={CarLogoImg} alt='Logo' />
      </LogoImg>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
}
