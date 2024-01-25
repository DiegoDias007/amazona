import styled from "styled-components";
import CartProductCardProps from "../interfaces/CartProductCardProps";
import useCartStore from "../store/useCartStore";

const Quantity = styled.div`
	display: flex;
	justify-content: space-between;

  span:nth-child(1) {
    cursor: pointer;
  }

  span:nth-child(3) {
    cursor: pointer;
  }
`;

export default function CartProductCard({ product }: CartProductCardProps) {
	const addProduct = useCartStore((state) => state.addProduct);
	const decreaseCount = useCartStore((state) => state.decreaseCount);

	return (
		<>
			<img src={product.image} alt={product.name} />
			<span>{product.name}</span>
			<span>${product.price}</span>
			<Quantity>
				<span onClick={() => decreaseCount(product)}>-</span>
				<span>{product.count}</span>
				<span onClick={() => addProduct(product)}>+</span>
			</Quantity>
			<span>${product.count * product.price}</span>
		</>
	);
}
