import styled from "styled-components";
import ProductProps from "../interfaces/ProductProps";
import Button from "./Button";
import { useNavigate  } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import React from "react";

const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #ddd;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease-in-out;
	margin-top: 20px;
  cursor: pointer;

	&:hover {
		transform: scale(1.05);
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 4px;
		object-fit: cover;
	}

	h1 {
		margin-top: 12px;
		font-size: 16px;
		font-weight: bold;
	}

	span {
		margin-top: 8px;
		font-size: 14px;
		font-weight: 100;
	}

  span.price {
    margin-bottom: 20px;
  }

  button {
    margin-top: auto; 
  }
`;

export default function Product({ product }: ProductProps) {
	const navigate = useNavigate();
  const addProduct = useCartStore((state) => state.addProduct)

  function addToCart(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    addProduct(product)
  }

  function navigateToProductPage() {
    navigate(`/products/${product.id}`)
  }
  
  return (
		<ProductCard onClick={() => navigateToProductPage()}>
			<img src={product.image} alt={product.name} />
			<h1>{product.name}</h1>
			<span>Category: {product.category}</span>
			<span className="price">Price: ${product.price}</span>
      <Button text="Add to Cart" onClick={addToCart}></Button>
		</ProductCard>
	);
}
