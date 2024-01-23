import { Container, Input, SubmitButton, Form, Title } from "../Form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import loginUser from "./loginUser";
import { useState } from "react";
import useAuthStore from "../../../store/useAuthStore";
import { AxiosError } from "axios";

const loginUserFormSchema = z.object({
  email: z.string()
    .min(1, "Please enter an email.")
    .email("Your email is not valid."),
  password: z.string().min(6, "Password must be atleast 6 characters.")
})

type LoginUserFormData = z.infer<typeof loginUserFormSchema>

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema)
  })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  async function onSubmit(data: LoginUserFormData) {
    try {
      const response = await loginUser(data)
      if (response?.status === 200) {
        setAuthenticated(true)
        navigate("/products")
      } else {
        setError("Invalid email or password.")
      }
  } catch (error) {
    const err = error as AxiosError;
    if (err.isAxiosError) {
      setError(err.response.data.message)
    }
  }
  }

  return (
    <Container>
      <Title>Login</Title>
      {error ? <div>{error}</div> : ""}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="email" {...register("email")} placeholder="Email" />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <Input type="password" {...register("password")} placeholder="Password" />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
    </Container>
  )
}
