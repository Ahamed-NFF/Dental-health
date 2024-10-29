import React from "react";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import "./index.css";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotfoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <Navigate to="admin" /> }, // Redirects root path to /admin
        { path: "admin", element: <AdminPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
