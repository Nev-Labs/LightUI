import { useState, useEffect } from "react";

import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Models from "./components/Models.jsx";
import About from "./components/NavComp/About.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HandleModels from "./components/HandleModels.jsx";
import "./App.css";
import ContactUs from "./components/NavComp/ContactUs.jsx";
import { LuSun } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa6";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme(theme === "dark" ? "lignt" : "dark");
	if(theme==='dark'){
		rootElem.classList.remove('bg-slate-200')
		rootElem.classList.add('bg-slate-500')
	}else{
		
		rootElem.classList.remove('bg-slate-500')
		rootElem.classList.add('bg-slate-200')
	}
  };
  useEffect(()=>{
	if(theme==='dark'){
		document.documentElement.classList.add('dark')
	}else{
		document.documentElement.classList.remove('dark')
	}
  },[theme])
  const rootElem=document.getElementById('root')


  return (
    <>
      <Header />
      <div className="flex justify-end mx-8 md:mx-3">
        <button onClick={changeTheme}>
          {theme === "dark" ? (
			  <FaRegMoon className=" hover:cursor-pointer p-2 text-4xl" />
		) : (
			  <LuSun className=" hover:cursor-pointer p-2 text-4xl" />
          )}
        </button>
      </div>
      <Outlet />
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
        element: <HandleModels />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default appRouter;
