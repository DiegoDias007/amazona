import useAuthStore from "../store/authStore";
import api from "./axios";

async function useLogout() {
  const setIsAuthenticated = useAuthStore((state) => state.setAuthenticated);
  async function logout() {
    setIsAuthenticated(false);
    await api.post("/auth/logout");
  }
  return logout;
}

export default useLogout;