import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.span`
	text-decoration: none;
	font-weight: 30px;
	padding: 5px 8px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: var(--button-hover-color);
	}
`;
export default function Logo() {
	const navigate = useNavigate();
	return <StyledLogo onClick={() => navigate("/")}>AMAZONA</StyledLogo>;
}
