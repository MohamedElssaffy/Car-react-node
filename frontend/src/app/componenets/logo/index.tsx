import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoImgDark from '../../../assets/images/car-logo-dark.png';

interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

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
	m-1
	`}
  ${({ color }: ILogoProps) =>
    color === 'white' ? tw`text-white` : tw`text-black`}
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

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;
  return (
    <LogoContainer>
      <LogoImg>
        <img
          src={bgColor === 'dark' ? CarLogoImgDark : CarLogoImg}
          alt='Logo'
        />
      </LogoImg>
      <LogoText color={color || 'dark'}>Yourcar.</LogoText>
    </LogoContainer>
  );
}
