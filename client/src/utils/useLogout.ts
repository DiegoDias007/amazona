import useAuthStore from "../store/useAuthStore";
import api from "./api";

async function useLogout() {
  const setIsAuthenticated = useAuthStore((state) => state.setAuthenticated);
  async function logout() {
    setIsAuthenticated(false);
    await api.post("/auth/logout");
  }
  return logout;
}

export default useLogout;