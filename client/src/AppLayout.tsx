import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import useAuth from "./utils/useAuth"

export default function AppLayout() {
  useAuth()
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}