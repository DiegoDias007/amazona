import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

export default function useAuth() {
  const isAuthenticated = useAuthStore(state => state.authenticated)
  const navigate = useNavigate()
  const currentURL = useLocation().pathname
  
  useEffect(() => {
    if (!isAuthenticated) {
      if (currentURL === "/login" || currentURL === "/signup") {
        return;
      } else {
        return navigate("/")
      }
    } else {
      if (currentURL === "/login" || currentURL === "/signup" || currentURL === "/") {
        return navigate("/products")
      } else {
        return;
      }
    }
  }, [isAuthenticated, navigate, currentURL])
} 