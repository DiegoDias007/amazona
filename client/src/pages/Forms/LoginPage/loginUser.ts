import api from "../../../utils/api";

type LoginUser = {
  email: string;
  password: string;
}

export default async function loginUser(data: LoginUser) {
  try {
    const response = await api.post("/auth/login", data)
    return response
  } catch(error) {
    console.log(error)
    throw error;
  }
}