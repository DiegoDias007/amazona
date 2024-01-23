import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import createUser from "./createUser";
import { Link, useNavigate } from "react-router-dom";
import { Container, Input, SubmitButton, Form, Title } from "../Form";
import useAuthStore from "../../../store/useAuthStore";
import { useState } from "react";
import { AxiosError } from "axios";

const createUserFormSchema = z.object({
  email: z.string()
    .min(1, "Please enter an email.")
    .email("Your email is not valid."),
  firstName: z.string()
    .min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  password: z.string().min(6, "Password must be atleast 6 characters.")
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const setAuthenticated = useAuthStore(state => state.setAuthenticated)

  async function onSubmit(data: CreateUserFormData) {
    try {
      const response = await createUser(data)
      if (response?.status === 201) {
        setAuthenticated(true)
        navigate("/products")
      } else {
        setError("Unknown error ocurred")
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
      <Title>Sign Up</Title>
      {error ? <div>{error}</div> : ""}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="text" {...register("firstName")} placeholder="First Name" />
          {errors.firstName && <div>{errors.firstName.message}</div>}
        </div>
        <div>
          <Input type="text" {...register("lastName")} placeholder="Last Name" />
          {errors.lastName && <div>{errors.lastName.message}</div>}
        </div>
        <div>
          <Input type="email" {...register("email")} placeholder="Email" />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <Input type="password" {...register("password")} placeholder="Password" />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Container>
  );
}