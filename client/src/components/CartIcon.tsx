import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	cursor: pointer;
  height: 2em;
  
  &:hover {
		background-color: var(--button-hover-color)
	}
`;

export default function CartIcon() {
	const navigate = useNavigate()
  
  function handleClick() {
    navigate("/cart")
  }

  return (
		<Container>
			<BsCart2 onClick={handleClick} fill="var(--primary-color)" size="100%"/>
		</Container>
	);
}
