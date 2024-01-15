import { useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import createUser from "../utils/createUser";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 5px 0px;
  padding-left: 5px;
  font-size: 15px;
  width: 300px;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  font-size: 20px;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Title = styled.h1`
  color: var(--primary-color);
  font-size: 45px;
`;

const createUserFormSchema = z.object({
  email: z.string()
    .min(1, "Please enter an email.")
    .email("Your email is not valid."),
  firstName: z.string()
    .min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  password: z.string().min(6, "Password must be atleast 6 characters.")
})

type UserFormData = z.infer<typeof createUserFormSchema>

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })
  const navigate = useNavigate();

  async function onSubmit(data: UserFormData) {
    try {
      await createUser(data)
      navigate("/products")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Title>Sign Up</Title>
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
    </Container>
  );
}