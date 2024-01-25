import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
	background-color: var(--primary-color);
	width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90.65vh;
  flex-direction: column;

  h1 {
    font-size: 30px;
    color: var(--text-color-white);
    background-color: var(--primary-color)
  }

  span {
    font-size: 20px;
    color: var(--text-color-white);
    background-color: var(--primary-color);
    margin-bottom: 20px;
  }
`;

interface CartRightSideProps {
  total: number;
}

export default function CartRightSide({total}: CartRightSideProps) {
  return (
    <Container>
      <h1>Total amount</h1>
      <span>${total}</span>
      <Button text="Checkout" onClick={() => null}></Button>
    </Container>
  )
}
