  import styled from "styled-components";

  const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    margin-top: 20px;

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
    }

    span {
      margin-top: 8px;
      font-size: 14px;
    }
  `;


  export default function Product({ product }) {
    return (
      <ProductCard>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <span>Category: {product.category}</span>
        <span>Price: ${product.price}</span>
      </ProductCard>
    );
  }
