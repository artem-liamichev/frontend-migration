import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Contact from "./routes/contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
