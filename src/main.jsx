import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Installation from "./Pages/Installation.jsx";
import Apps from "./Pages/Apps.jsx";
import Error404 from "./Pages/Error404.jsx";
import Spinner from "./Pages/Spinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: Spinner,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/*",
        Component: Error404,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
