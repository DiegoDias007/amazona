import { useQuery } from "@tanstack/react-query";
import api from "./api";

async function fetchProducts() {
  const response = await api.get("/products");
  return response;
}

export default function useProductsData() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts, 
  });

  return query;
}
