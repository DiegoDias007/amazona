import styled from "styled-components";
import useCartStore from "../store/useCartStore";

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 90vh;
`;

const LeftSide = styled.div`
  width: 100%;
`;

const RightSide = styled.div`
	background-color: var(--primary-color);
  color: var(--text-color-white);
	width: 500px;
`;

export default function CartPage() {
	const products = Array.from(useCartStore((state) => state.products).values())
  console.log(products)
  return (
		<Container>
			<LeftSide>{products.map((product) => {
        return <h1>{product.name}</h1>
      })}</LeftSide>
			<RightSide>Something</RightSide>
		</Container>
	);
}
