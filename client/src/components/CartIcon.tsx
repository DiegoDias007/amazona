import { BsCart2 } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
	cursor: pointer;
  height: 2em;
  
  &:hover {
		background-color: var(--button-hover-color)
	}
`;

export default function CartIcon() {
	return (
		<Container>
			<BsCart2 fill="var(--primary-color)" size="100%"/>
		</Container>
	);
}
