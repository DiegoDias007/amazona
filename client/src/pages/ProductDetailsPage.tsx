import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
	const { id } = useParams();
  console.log(id)

	return <div>ProductDetailsPage</div>;
}