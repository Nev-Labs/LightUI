import {OLLAMA_BASE_ADDR} from '../utils/Constant.jsx';
import {useEffect, useState} from 'react';
const Models = (props) => {
	const [lmodel, setLmodel] = useState([]);
	const [name, setName] =useState("");

	useEffect(() => {
		Output();
	}, []) 
	const Output = async () => {
		const models = await fetch(OLLAMA_BASE_ADDR + '/api/tags');
		const nas = await models.json();
		console.log();
		setLmodel((files)  => [...files, nas]);
		props.onData(nas.models[0].name);
	}
	function Cn(event){
		setName(event.target.value);
		props.onData(event.target.value);
	}
	//get first select value 
	return (
		<div className="models">
		<select  className="selector" value={name} onChange={Cn}>
		{ lmodel[0] &&  lmodel[0].models.map((d)=>{
			return(
				<option key={d.model}>{d.model} </option>
			)
		})
		}
		</select>

		</div>
	)
}
export default Models;
