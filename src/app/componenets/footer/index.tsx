import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
		min-w-full
		flex
		flex-col
		items-center
		justify-center
		pt-10
		md:pt-16
	`}
`;

const InnerContainer = styled.div`
  ${tw`
		flex
		flex-wrap
		h-full
		w-full
		max-w-screen-2xl
	`}
`;

const AboutContainer = styled.div`
  ${tw`
		flex
		flex-col
		mr-2
		md:mr-14
		pl-10
    pr-10
    md:pl-3
    md:pr-3
	`}
`;

const AboutText = styled.p`
  ${tw`
		max-w-xs
		text-white
		text-sm
		font-normal
		leading-5
		mt-2
	`}
`;

const SectionContainer = styled.div`
  ${tw`
		w-full
		md:w-auto
		flex
		flex-col
		mr-2
		md:mr-14
		pl-10
    pr-10
    md:pl-3
    md:pr-3
		mt-7
		md:mt-0
	`}
`;

const LinksList = styled.ul`
  ${tw`
		list-none
		flex
		flex-col
	`}
`;

const ListItem = styled.li`
  ${tw`
		mb-3
		ml-3
	`}

  & > a {
    ${tw`
			text-xs
			text-white
			transition-all
			hover:text-gray-400
		`}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
		text-2xl
		text-white
		font-bold
		mb-3
	`}
`;

const HorizontalContainer = styled.div`
  ${tw`
		flex
		items-center
	`}
`;

const RedIcon = styled.span`
  ${tw`
		w-7
		h-7
		flex
		items-center
		justify-center
		bg-red-500
		rounded-full
		text-white
		text-base
		mr-2
	`}
`;

const SmallText = styled.h6`
  ${tw`
	 	text-sm
    text-white
	`}
`;

const BottomContainer = styled.div`
  ${tw`
		w-full
		max-w-screen-2xl
		flex
		justify-center
		md:justify-start
		mt-7
		md:mt-2
		md:pl-3
	`}
`;

const CopyrightText = styled.small`
  font-size: 13px;
  ${tw`
		text-gray-400
	`}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color='white' bgColor='dark' />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            services.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#'>Home</a>
            </ListItem>
            <ListItem>
              <a href='#'>About Us</a>
            </ListItem>
            <ListItem>
              <a href='#'>Services</a>
            </ListItem>
            <ListItem>
              <a href='#'>Models</a>
            </ListItem>
            <ListItem>
              <a href='#'>Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#'>FAQ</a>
            </ListItem>
            <ListItem>
              <a href='#'>Contact Us</a>
            </ListItem>
            <ListItem>
              <a href='#'>Support</a>
            </ListItem>
            <ListItem>
              <a href='#'>Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href='#'>Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 1554-4548-458</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>Yourcar@mail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
