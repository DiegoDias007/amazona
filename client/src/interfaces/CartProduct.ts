interface CartProduct {
  name: string;
  id: string;
  description ?: string;
  rating: string;
  image: string;
  category: string;
  price: number;
  count: number;
}

export default CartProduct;