import styled from 'styled-components';
import tw from 'twin.macro';

interface IButtonProps {
  theme?: 'filled' | 'outFilled';
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
		pl-5
		pr-5
		pt-3
		pb-3
		outline-none
		focus:outline-none
		text-sm
		text-white
		font-semibold
		rounded-md
		border-transparent
		border-2
		border-solid
		transition-all
		duration-200
		ease-in-out
		m-1
	`}
`;

const OutlineButton = styled(BaseButton)`
  ${tw`
		bg-red-500
		hover:bg-transparent
		hover:text-red-500
		hover:border-red-500
	`}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
		border-red-500
		bg-transparent
		text-red-500
		hover:bg-red-500
		hover:text-white
		hover:border-transparent
	`}
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;

  if (theme === 'filled') {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlineButton className={className}>{text}</OutlineButton>;
  }
}
