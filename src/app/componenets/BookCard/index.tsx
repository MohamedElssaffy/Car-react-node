import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from '../button';
import { Marginer } from '../marginer';
import SCREENS from '../../componenets/responsive/responsive';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
		flex
		items-center
		justify-center
		rounded-md
		bg-white
		pt-1
		pb-1
		pl-2
		pr-2
		md:pt-2
		md:pb-2
		md:pl-6
		md:pr-6

	`};
`;

const ItemContainer = styled.div`
  ${tw`
		flex
		relative
	`}
`;

const Icon = styled.span`
  ${tw`
		text-xs
		md:text-base
		text-red-500
		fill-current
		mr-1
		md:mr-3
	`}
`;

const SmallIcon = styled.span`
  ${tw`
		text-gray-700
		fill-current
		text-xs
		md:text-base
		mr-2
	`}
`;

const Name = styled.span`
  ${tw`
		text-gray-600
		text-xs
		md:text-sm
		cursor-pointer
		select-none
	`}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;

  ${tw`
		bg-gray-300
		mr-2
		ml-2
		md:mr-5
		md:ml-5
		`}
`;

const DateCalendar = styled(Calendar)<{ offset?: boolean }>`
  max-width: none;
  position: absolute;
  top: 2em;
  left: 0em;
  user-select: none;

  ${({ offset }) =>
    offset &&
    css`
      left: -6em;
    `}

  @media
    (min-width: ${SCREENS.md}) {
    left: -2em;
    top: 3.5em;
  }
`;

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const handleToggelStartDate = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const handleToggelReturnDate = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleToggelStartDate}>
          Pick Up Date{' '}
          <SmallIcon>
            <FontAwesomeIcon
              icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>{' '}
        </Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={handleToggelReturnDate}>
          Return A Date{' '}
          <SmallIcon>
            <FontAwesomeIcon
              icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
        </Name>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Book Your Ride' />
    </CardContainer>
  );
}
