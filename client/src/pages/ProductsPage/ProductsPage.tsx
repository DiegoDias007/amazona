import styled from "styled-components";
import useProductsData from "../../utils/useProductsData";
import Product from "../../components/Product";
import ProductResponse from "../../interfaces/ProductResponse";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

export default function ProductsPage() {
  const { data: products, isLoading, error  } = useProductsData()
  
  if (isLoading) {
    return "loading"
  }

  if (error) {
    return error.message
  }

  return (
    <GridContainer>
      {!isLoading &&
        products?.data?.map((product: ProductResponse) => {
          return <Product key={product.id} product={product} />;
        })}
    </GridContainer>
  );
}