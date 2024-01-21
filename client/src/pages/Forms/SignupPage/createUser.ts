import api from "../../../utils/api"

type createUserDataSchema = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

async function useCreateUser (data: createUserDataSchema) {
  try {
    const response = await api.post("/auth/signup", data);
    return response
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export default useCreateUser;
