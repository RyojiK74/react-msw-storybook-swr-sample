import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

if (import.meta.env.MODE === "development") {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
