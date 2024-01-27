import { useQuery  } from "@tanstack/react-query";
import api from "./api";
import ProductResponse from "../interfaces/ProductResponse";

async function fetchProduct(id: string | undefined): Promise<ProductResponse> {
  try {
    const response = await api.get(`/products/${id}`);
    const data = await response.data as ProductResponse;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch product");
  }
}

export default function useProductData(id: string | undefined) {
  const query = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProduct(id)
  });

  return query;
}
