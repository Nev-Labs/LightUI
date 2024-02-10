import Loading from './Loading.jsx';
import {useState,useEffect} from 'react';
const Body = () => {
	const [searched, setSearched] = useState("");
	 const [val, setVal] = useState([]);
	const [ans, setAns] = useState("");
	const [final, setFinal] = useState([]);
	var content = "";
	const data =  async ()  => {
		var response = await fetch(' http://127.0.0.1:11434/api/chat ',
			{method: 'POST',
				headers:{ 'Content-Type': 'text/plain'},
				body: JSON.stringify({
					"model": "dolphin-mistral",
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
	}
	return (
		<div className="whole">
		<div className="input">
		<input placeholder="Search....." className="inp" type="text"  value={searched} onChange = { (e) => {
			setSearched(e.target.value);
		}}></input>
		<button className="search" onClick={() => {
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

