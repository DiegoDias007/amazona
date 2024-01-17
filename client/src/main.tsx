import React from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/Forms/LoginPage/LoginPage";
import SignupPage from "./pages/Forms/SignupPage/SignupPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { CookiesProvider } from "react-cookie";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="" element={<HomePage />} />
			<Route path="*" element={<ErrorPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="signup" element={<SignupPage />} />
			<Route path="cart" element={<CartPage />} />
			<Route path="products" element={<ProductsPage />} />
			<Route path="products/:id" element={<ProductDetailsPage />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<CookiesProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</CookiesProvider>
);
