import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--background-color);
	padding: 15px 30px;
	border-bottom: 2px solid black;
`;

const RightSide = styled.div`
	display: flex;
	align-items: center;
	background-color: var(--background-color);
`;

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<NavbarContainer>
			<Logo />
			<RightSide>
				<Button
					text="Login"
					onClick={() => navigate("/login")}
				/>
				<Button
					text="Sign Up"
					textColor="white"
					backgroundColor="var(--primary-color)"
          hoverColor="var(--secondary-color)"
					onClick={() => navigate("/signup")}
				/>
			</RightSide>
		</NavbarContainer>
	);
}
