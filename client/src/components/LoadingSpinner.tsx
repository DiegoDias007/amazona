import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export default function LoadingSpinner() {
	return (
		<Container>
			<TailSpin
				visible={true}
				height="80"
				width="80"
				color="var(--primary-color)"
				ariaLabel="tail-spin-loading"
				radius="1"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</Container>
	);
}
