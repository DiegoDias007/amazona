interface ProductResponse {
  name: string;
  id: string;
  rating: string;
  image: string;
  category: string;
  price: number;
  description?: string;
}

export default ProductResponse;