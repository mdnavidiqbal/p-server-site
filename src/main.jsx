import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import { router } from "./route/route.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";


const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position='top-right' reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
