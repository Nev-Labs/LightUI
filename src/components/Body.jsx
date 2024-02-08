import {useState,useEffect} from 'react';
const Body = () => {
	const [searched, setSearched] = useState("");
	 const [val, setVal] = useState([]);
	const [ans, setAns] = useState([]);
	var content = "";
	const data =  async ()  => {
		var response = await fetch(' http://127.0.0.1:11434/api/chat ',
			{method: 'POST',
				headers:{ 'Content-Type': 'text/plain'},
				body: JSON.stringify({
					"model": "tinyllama",
					"messages": [
						{ "role": "user", "content": searched,  }
					], "stream": false})
			});
		const maybe = await response.json();
		setAns((files) => [...files, maybe.message.content]);
	}
	return (
		<div className="whole">
		<div className="input">
		<input type="text"  value={searched} onChange = { (e) => {
			setSearched(e.target.value);
		}}></input>
		<button onClick={() => {
			if(searched===""){
				alert("enter a prompt");
			}
			else{
				setVal((files) => [...files, searched]);
				data();
			}
		}}>search</button>
		</div>

		<div className="box"> 
		{val.toReversed().map((data, index) => {
			const i = ans.length < val.length ? ans[(ans.length-2) - index] : ans[(ans.length-1)-index];
				return (
					<div className="content">
					<h3>You</h3>
					<h5 className="Ans">{data}</h5>
					<h3>Mini AI</h3>
					{ ans.length < index-1 ? (
						<h5>loading</h5>//set the loading to 
					) : (
						<h5 className="Ans">{i}</h5>
					)}
					</div>
			)
		})
		}
		</div>
		</div>
	);

}


export default Body;

