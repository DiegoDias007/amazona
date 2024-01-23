import { create } from "zustand";
import CartStore from "../interfaces/CartStore";

const useCartStore = create<CartStore>((set) => ({
  products: new Map(),
  addProduct: (newProduct) => {
    set((state) => {
      const updatedProducts = new Map(state.products);

      if (updatedProducts.has(newProduct.id)) {
        const existingProduct = updatedProducts.get(newProduct.id);

        if (existingProduct) {
          existingProduct.count += 1;
          updatedProducts.set(newProduct.id, { ...existingProduct });
        }
      } else {
        updatedProducts.set(newProduct.id, { ...newProduct, count: 1 });
      }

      return { products: updatedProducts };
    });
  },
  removeProduct: (product) => {
    set((state) => {
      const updatedProducts = new Map(state.products);
      updatedProducts.delete(product.id);
      return { products: updatedProducts };
    });
  },
  decreaseCount: (product) => {
    set((state) => {
      const updatedProducts = new Map(state.products);
      const existingProduct = updatedProducts.get(product.id);

      if (existingProduct) {
        existingProduct.count -= 1;

        if (existingProduct.count === 0) {
          updatedProducts.delete(product.id);
        } else {
          updatedProducts.set(product.id, { ...existingProduct });
        }
      }

      return { products: updatedProducts };
    });
  },
}));

export default useCartStore;  