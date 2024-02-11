import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Models from './components/Models.jsx'
import './App.css'

function App() {
	const [mname, setMname] = useState("");
	function handlecallback(data){
		setMname(data);
	}
	console.log(mname);
	return (
		<>
		<Header/>
		<Models onData={handlecallback}/>
		<Body n={mname}></Body>
		</>
	)
}

export default App
