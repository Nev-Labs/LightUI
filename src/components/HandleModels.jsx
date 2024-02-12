import Body from './Body.jsx'
import Models from './Models.jsx'
import { useState, useEffect } from 'react'
function HandleModels() {
	const [mname, setMname] = useState("");
	function handlecallback(data){
		setMname(data);
	}
	console.log(mname);
	return (
		<>
		<Models onData={handlecallback}/>
		<Body n={mname}></Body> 
		</>
	)
}

export default HandleModels;
