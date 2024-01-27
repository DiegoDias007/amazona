import { useParams } from "react-router-dom";
import useProductData from "../utils/useProductData";
import LoadingSpinner from "../components/LoadingSpinner";
import styled from "styled-components";
import Button from "../components/Button";
import useCartStore from "../store/useCartStore";

export default function ProductDetailsPage() {
	const { id } = useParams();
	const { data: product, isLoading, error } = useProductData(id);
	const addProduct = useCartStore((state) => state.addProduct);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (error || !product) {
		return <div>An error ocurred...</div>;
	}

  return (
		<Container>
			<LeftSide>
				<h1>{product.name}</h1>
				<img src={product.image} />
			</LeftSide>
			<RightSide>
				<p>{product.description}</p>
				<span>${product.price}</span>
				<Button text="Add to Cart" onClick={() => addProduct(product)} />
			</RightSide>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 90vh;

	img {
		width: 450px;
    border-radius: 8px;
	}

  h1 {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const RightSide = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 60px;

	span {
		margin: 20px 0;
		font-size: 30px;
		font-weight: bold;
	}
`;
