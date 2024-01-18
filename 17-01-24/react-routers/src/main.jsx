import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./routes/Page404";
import Homepage from "./routes/homepage";
import "./index.module.scss";
import Product from "./routes/product";
import Contact from "./routes/contact";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "products/:productId",
    element: <Product />,
  },

  {
    path: "about/",
    element: <About />,
    errorElement: <Page404 />,
  },

  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
