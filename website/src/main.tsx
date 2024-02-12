import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Recon from "./pages/Recon.tsx";
import WebApps from "./pages/WebApps.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Slides from "./pages/Slides.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "/6443", element: <WebApps /> },
      {
        path: "/6443/resources/recon",
        element: <Recon />,
      },
      {
        path: "/6443/:week",
        element: <Slides />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
