import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import useAuthStore from "../store/useAuthStore";
import api from "../utils/api";
import CartIcon from "./CartIcon";

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
  gap: 10px;
`;

const logoutURL = "http://localhost:3000/auth/logout"

export default function Navbar() {
	const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.authenticated);
  const setIsAuthenticated = useAuthStore((state) => state.setAuthenticated);
	
  async function handleLogout() {
    setIsAuthenticated(false);
    await api.post(logoutURL);
  }

  return (
		<NavbarContainer>
			<Logo />
			<RightSide>
				{!isAuthenticated ? (
					<>
						<Button text="Login" onClick={() => navigate("/login")} />
						<Button
							text="Sign Up"
							textColor="white"
							backgroundColor="var(--primary-color)"
							hoverColor="var(--secondary-color)"
							onClick={() => navigate("/signup")}
						/>
					</>
				) : (
					<>
            <Button
							text="Logout"
							textColor="white"
							backgroundColor="var(--primary-color)"
							hoverColor="var(--secondary-color)"
							onClick={handleLogout}
						/>
            <CartIcon />
					</>
				)}
			</RightSide>
		</NavbarContainer>
	);
}
