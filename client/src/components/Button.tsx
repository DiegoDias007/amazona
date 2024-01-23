import styled from "styled-components";

type ButtonProps = {
	text: string;
	textColor?: string;
	backgroundColor?: string;
	hoverColor?: string;
	onClick: (...args: any[]) => void;
};

interface StyledButtonProps {
	backgroundColor?: string;
	textColor?: string;
	hoverColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ textColor }) => textColor || "var(--text-color)"};
  background-color: ${({ backgroundColor }) =>
		backgroundColor || "var(--background-color)"};
  border: 2px solid var(--secondary-background-color);
  font-size: 15px;
  border-radius: 10px;
  padding: 5px 7px;
  margin: 0px 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "var(--button-hover-color)"};
  }
`;

export default function Button({
	text,
	textColor,
	backgroundColor,
	hoverColor,
	onClick,
}: ButtonProps) {
	return (
		<StyledButton
			backgroundColor={backgroundColor}
			textColor={textColor}
			hoverColor={hoverColor}
			onClick={onClick}
		>
			{text}
		</StyledButton>
	);
}
