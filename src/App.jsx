import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Models from './components/Models.jsx'
import About from './components/About.jsx'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import HandleModels from './components/HandleModels.jsx'
import './App.css'

function App() {
	return (
		<>
		<Header/>
		<Outlet/>
		</>
	)
}
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <HandleModels/>
			},
			{
				path: '/about',
				element: <About />
			}
		],
		errorElement: <Error />
	},
]);
export default appRouter ;
