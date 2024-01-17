import { ReactNode } from "react";
import { Route} from "react-router-dom";
import useAuth from "../utils/useAuth";

interface ProtectedRouteProps {
  path: string,
  element: ReactNode
}

export default function ProtectedRoute({ path, element }: ProtectedRouteProps) {
  useAuth()

  return <Route path={path} element={element} />;
}
