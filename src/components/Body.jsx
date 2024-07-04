import Loading from "./Loading.jsx";
import { useState, useEffect } from "react";
import { OLLAMA_BASE_ADDR } from "../utils/Constant.jsx";
const Body = (props) => {
  console.log(props.n);
  const [searched, setSearched] = useState("");
  const [val, setVal] = useState([]);
  const [ans, setAns] = useState("");
  const [final, setFinal] = useState([]);
  const [isdisabled, seteDisabled] = useState(false);
  var content = "";
  const data = async () => {
    seteDisabled(true);
    var response = await fetch(OLLAMA_BASE_ADDR + "/api/chat ", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        model: props.n,
        messages: [{ role: "user", content: searched }],
        stream: false,
      }),
    });
    const maybe = await response.json();
    setFinal((prevFinal) => {
      const lastItemIndex = prevFinal.length - 1;
      const updatedFinal = [...prevFinal];
      updatedFinal[lastItemIndex] = {
        ...updatedFinal[lastItemIndex],
        myans: {
          you: searched,
          message: maybe.message.content,
        },
      };
      return updatedFinal;
    });
    seteDisabled(false);
  };

  const check = (event) => {
    if (event.key === "Enter" && !isdisabled) {
      clicked();
    }
  };
  const clicked = () => {
    if (searched === "") {
      alert("enter a prompt");
    } else {
      setFinal((files) => [
        ...files,
        {
          myans: {
            you: searched,
            message: "",
          },
        },
      ]);
      data();
    }
  };
  return (
      <div className="grid md:grid-cols-12 sm:grid-cols-6 grid-cols-10  ">
    <div className="whole  sm:col-span-4 sm:col-start-2 md:col-span-8 md:col-start-3 col-start-2 col-span-8 ">
        {/* input field */}
        <div className="input  p-2 flex">
          <input
            placeholder="Enter a prompt here"
            className="inp p-2      text-lg bg-slate-300 text-black font-semibold  rounded-s-full md:p-3   md:w-full sm:w-full w-auto"
            type="text"
            value={searched}
            onKeyPress={check}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          ></input>
          <button
            disabled={isdisabled}
            className="search bg-slate-300 text-black hover:bg-slate-200 text-lg p-2  rounded-e-full"
            onClick={() => {
              clicked();
            }}
          >
            search
          </button>
          
        </div>
 
        {/* box where the whole chat render */}
        <div className="box bg-slate-100 rounded-[20px]">
          {final.toReversed().map((data, index) => {
            return final.length > 0 ? (
              <div className="content border-4 rounded-[20px] p-5">
                <h3 className="text-end my-2">/You</h3>
                <h5 className="Ans text-end ">{data.myans.you}</h5>
                <h3 className="my-2">/MINI AI</h3>
                {data.myans.message === "" ? (
                  <Loading />
                ) : (
					<>
					<div className="rtl">
                  <h5 className="bg-slate-300 p-5 tracking-wide leading-6 rounded-e-xl text-wrap "> {data.myans.message}</h5>

					</div>
					</>
                )}
                <hr className="line"></hr>
              </div>
            ) : (
              <p>No data available</p>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};

export default Body;
