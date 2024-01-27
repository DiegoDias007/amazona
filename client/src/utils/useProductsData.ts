import { useQuery } from "@tanstack/react-query";
import api from "./api";

async function fetchProducts() {
	try {
		const response = await api.get("/products");
		return response;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch product");
	}
}

export default function useProductsData() {
	const query = useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
	});

	return query;
}
