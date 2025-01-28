import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Models from "./components/Models.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HandleModels from "./components/HandleModels.jsx";
import "./App.css";
import Landing from "./components/Landing.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Landing />, // Landing page at root
      },
      {
        path: "/chat",
        element: <HandleModels />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default appRouter;
