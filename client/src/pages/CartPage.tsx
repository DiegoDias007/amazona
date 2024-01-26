import styled from "styled-components";
import useCartStore from "../store/useCartStore";
import CartProductCard from "../components/CartProductCard";
import CartTitle from "../components/CartTitle";
import CartRightSide from "../components/CartRightSide";

const CartEmpty = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const CartLeftSide = styled.div`
	width: auto;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(auto, 10px);
	text-align: center;
	margin-left: 40px;
	grid-row-gap: 20px;
	align-items: center;

	img {
		height: auto;
		width: 100px;
		grid-column-start: 1;
		padding-left: 30px;
	}

	.title {
		grid-column-start: 2;
		height: 10px;
	}

	@media (max-width: 900px) {
		order: 1;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

export default function CartPage() {
	const products = Array.from(useCartStore((state) => state.products).values());
	let total = 0;
	products.forEach((product) => {
		total += product.count * product.price;
	});

	if (products.length === 0) {
		return (
			<CartEmpty>
				<span>Your cart is empty</span>
			</CartEmpty>
		);
	}

	return (
		<Container>
			<CartLeftSide>
				<CartTitle />
				{products.map((product) => {
					return <CartProductCard product={product} />;
				})}
			</CartLeftSide>
			<CartRightSide total={total} />
		</Container>
	);
}
