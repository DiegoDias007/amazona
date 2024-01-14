import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
	const params = useParams();
	console.log(params);

	return <div>ProductDetailsPage</div>;
}