import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "./page-content/Home";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Duvet } from "./page-content/duvetInstructions";
import { BeeBlock } from "./page-content/beeBlock";
import { Projects } from "./page-content/Projects";
import { Links } from "./page-content/Links";
import { Calculators } from "./page-content/Calculators";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    loader: () => import("./App"),
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => import("./page-content/Home"),
      },
      {
        path: "projects",
        element: <Projects />,
        loader: () => import("./page-content/Projects"),
      },
      {
        path: "tutorials/duvet",
        element: <Duvet />,
        loader: () => import("./page-content/duvetInstructions"),
      },
      {
        path: "tutorials/bee-block",
        element: <BeeBlock />,
        loader: () => import("./page-content/beeBlock"),
      },
      {
        path: "links",
        element: <Links />,
        loader: () => import("./page-content/Links"),
      },
      {
        path: "calculators",
        element: <Calculators />,
        loader: () => import("./page-content/Calculators"),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
