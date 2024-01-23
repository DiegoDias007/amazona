import CartProduct from "./CartProduct";
import ProductResponse from "./ProductResponse";

interface CartStore {
  products: Map<string, CartProduct>;
  addProduct: (product: ProductResponse) => void;
  removeProduct: (product: ProductResponse) => void;
  decreaseCount: (product: ProductResponse) => void;
}

export default CartStore;