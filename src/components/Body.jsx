import React, { useState } from "react";
import Header from "./Header.jsx";
import { OLLAMA_BASE_ADDR } from "../utils/Constant.jsx";
import ClearChat from "./ClearChat.jsx";

const Body = (props) => {
  const [searched, setSearched] = useState(""); // Current user input
  const [chatHistory, setChatHistory] = useState([]);

  const responseMap = {
    Hello: "Hi there! How can I assist you today?",
    "What is React?":
      "React is a JavaScript library for building user interfaces.",
    "Tell me a joke":
      "Why don’t skeletons fight each other? They don’t have the guts!",
    Goodbye: "Take care! See you soon.",
  };

  const handleUserInput = () => {
    if (searched.trim() === "") {
      alert("Please enter a prompt ");
      return;
    }
    const aiResponce =
      responseMap[searched] || "I don't have a response for that ";

    setChatHistory((previousChats) => [
      ...previousChats,
      {
        you: searched,
        ai: aiResponce,
      },
    ]);
    setSearched("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleUserInput();
  };

  // Function to clear the chat history
  const clearChatHistory = () => {
    setChatHistory([]);
  };

  return (
    <>
      {/* Header with Clear Chat Button */}
      {/* <ClearChat onClearChat={clearChatHistory} /> */}

      <div
        id="main"
        className="w-screen h-screen overflow-hidden fixed flex flex-col justify-center items-center bg-gradient-to-b from-[#0a122a] via-[#14001f] to-[#0a122a]"
      >
        {/* Chat Block */}
        <div
          id="chatBlock"
          className="border border-gray-700 rounded-lg p-4 w-3/4 h-3/5 overflow-y-auto flex flex-col-reverse shadow-lg"
        >
          {chatHistory.length === 0 ? (
            <p className="text-gray-400 md:text-6xl text-2xl text-center my-auto">
              What can I help with?
            </p>
          ) : (
            chatHistory
              .slice()
              .reverse()
              .map((chat, index) => (
                <div key={index} className="mb-4">
                  {/* User Message */}
                  <div className="flex flex-col items-end mb-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-600 text-white rounded-lg px-3 py-1 shadow-md">
                        You
                      </span>
                    </div>
                    <p className="bg-[#243855] text-gray-200 rounded-lg px-3 py-2 mt-1 shadow-md max-w-xs">
                      {chat.you}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <span className="bg-green-600 text-white rounded-lg px-3 py-1 shadow-md">
                      AI
                    </span>
                    <p className="bg-[#243855] text-gray-200 rounded-lg px-3 py-1 flex-1">
                      {chat.ai}
                    </p>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Input Section */}
        <div
          id="inputPrompt"
          className="w-full flex items-center justify-center py-4 border-gray-700"
        >
          <input
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Enter your prompt"
            className="bg-[#243855] text-gray-200 border border-gray-600 rounded-lg p-2 w-2/3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleUserInput}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500 shadow-lg"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
// import Loading from "./Loading.jsx";
// import { useState, useEffect } from "react";
// import { OLLAMA_BASE_ADDR } from "../utils/Constant.jsx";
// const Body = (props) => {
//   console.log(props.n);
//   const [searched, setSearched] = useState("");
//   const [val, setVal] = useState([]);
//   const [ans, setAns] = useState("");
//   const [final, setFinal] = useState([]);
//   const [isdisabled, seteDisabled] = useState(false);
//   var content = "";
//   const data = async () => {
//     seteDisabled(true);
//     var response = await fetch(OLLAMA_BASE_ADDR + "/api/chat ", {
//       method: "POST",
//       headers: { "Content-Type": "text/plain" },
//       body: JSON.stringify({
//         model: props.n,
//         messages: [{ role: "user", content: searched }],
//         stream: false,
//       }),
//     });
//     const maybe = await response.json();
//     setFinal((prevFinal) => {
//       const lastItemIndex = prevFinal.length - 1;
//       const updatedFinal = [...prevFinal];
//       updatedFinal[lastItemIndex] = {
//         ...updatedFinal[lastItemIndex],
//         myans: {
//           you: searched,
//           message: maybe.message.content,
//         },
//       };
//       return updatedFinal;
//     });
//     seteDisabled(false);
//   };

//   const check = (event) => {
//     if (event.key === "Enter" && !isdisabled) {
//       clicked();
//     }
//   };
//   const clicked = () => {
//     if (searched === "") {
//       alert("enter a prompt");
//     } else {
//       setFinal((files) => [
//         ...files,
//         {
//           myans: {
//             you: searched,
//             message: "",
//           },
//         },
//       ]);
//       data();
//     }

//   <div className="whole">
//     <div className="input">
//       <input
//         placeholder="Search....."
//         className="inp"
//         type="text"
//         value={searched}
//         onKeyPress={check}
//         onChange={(e) => {
// 			setSearched(e.target.value);
//         }}
// 		></input>
//       <button
//         disabled={isdisabled}
//         className="search"
//         onClick={() => {
//           clicked();
//         }}
//       >
//         search
//       </button>
//     </div>

//     <div className="box">
//       {final.toReversed().map((data, index) => {
//         return final.length > 0 ? (
//           <div className="content">
//             <h3>You</h3>
//             <h5 className="Ans">{data.myans.you}</h5>
//             <h3>MINI AI</h3>
//             {data.myans.message === "" ? (
//               <Loading />
//             ) : (
//               <h5> {data.myans.message}</h5>
//             )}
//             <hr className="line"></hr>
//           </div>
//         ) : (
//           <p>No data available</p>
//         );
//       })}
//     </div>
//   </div>
//   );
// };

// export default Body;
