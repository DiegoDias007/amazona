import styled from "styled-components"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`

const MainTitle = styled.h1`
  font-size: 40px;
  padding-bottom: 10px;
  text-align: center;
  color: var(--primary-color);
`

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <MainTitle>Everything you need in one place</MainTitle>
      <Button text="Get started now" onClick={() => navigate("/signup")}/>
    </Container>
  )
}
