import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px 0px;
  padding-left: 5px;
  font-size: 15px;
  width: 300px;
  border-radius: 8px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  font-size: 20px;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: var(--primary-color);
  font-size: 45px;
`;