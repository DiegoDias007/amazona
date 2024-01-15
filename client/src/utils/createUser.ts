import api from "./axios"

type createUserDataSchema = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const createUserURL = "http://localhost:3000/auth/signup";

async function useCreateUser (
  data: createUserDataSchema
) {
  try {
    await api.post(createUserURL, data);
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export default useCreateUser;
