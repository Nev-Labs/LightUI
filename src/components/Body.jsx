import Loading from './Loading.jsx';
import {useState,useEffect} from 'react';
import {OLLAMA_BASE_ADDR} from "../utils/Constant.jsx"
const Body = (props) => {
	console.log(props.n);
	const [searched, setSearched] = useState("");
	 const [val, setVal] = useState([]);
	const [ans, setAns] = useState("");
	const [final, setFinal] = useState([]);
	const [isdisabled, seteDisabled] = useState(false);
	var content = "";
	const data =  async ()  => {
		seteDisabled(true);
		var response = await fetch(OLLAMA_BASE_ADDR + '/api/chat ',
			{method: 'POST',
				headers:{ 'Content-Type': 'text/plain'},
				body: JSON.stringify({
					"model": props.n,
					"messages": [
						{ "role": "user", "content": searched,  }
					], "stream": false})
			});
		const maybe = await response.json();
		setFinal(prevFinal => {
			const lastItemIndex = prevFinal.length - 1;
			const updatedFinal = [...prevFinal];
			updatedFinal[lastItemIndex] = {
				...updatedFinal[lastItemIndex],
				myans: {
					you: searched,
					message: maybe.message.content
				}
			};
			 return updatedFinal;
		});
		seteDisabled(false);
	}

	const check = (event) => {
		if(event.key==='Enter' && !isdisabled){
			clicked();
		}
	}
	const clicked = () => {
		if(searched===""){
			alert("enter a prompt");
		}
		else{
			setFinal((files) => [...files,
				{myans:{
					you: searched,
					message:""
				}}] )
			data();
		}
	}
	return (
		<div className="whole">
		<div className="input">
		<input placeholder="Search....." className="inp" type="text"  value={searched} onKeyPress={check} onChange = { (e) => {
			setSearched(e.target.value);
		}}></input>
		<button disabled={isdisabled} className="search" onClick={() => {
			clicked();
		}}>search</button>
		</div>

		<div className="box"> 
		{final.toReversed().map((data, index) => {
			return (
				final.length > 0  ? (
					<div className="content">
					<h3>You</h3>
					<h5 className="Ans">{data.myans.you}</h5>
					<h3>Mini AI</h3>
					{data.myans.message===""  ? (
						<Loading/>
					) : (
					<h5> {data.myans.message}</h5>
					)}
					<hr className="line"></hr>
					</div>
			) : (
				<p>No data available</p>
			)
		)
		})
		}
		</div>
		</div>
	);

}


export default Body;

