import React, { useState } from "react";
import ClearChat from "./ClearChat.jsx";

const Body = ({ n }) => {
  const [searched, setSearched] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const responseMap = {
    Hello: "Hi there! How can I assist you today?",
    "What is React?": "React is a JavaScript library for building user interfaces.",
    "Tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
    Goodbye: "Take care! See you soon.",
  };

  const handleUserInput = () => {
    if (searched.trim() === "") return;
    const aiResponse = responseMap[searched] || "I don't have a response for that.";
    setChatHistory([...chatHistory, { you: searched, ai: aiResponse }]);
    setSearched("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleUserInput();
  };

  const clearChatHistory = () => setChatHistory([]);

  return (
    <>
      <ClearChat onClearChat={clearChatHistory} />
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="border border-gray-700 rounded-lg p-4 w-3/4 h-3/5 overflow-y-auto">
          {chatHistory.length === 0 ? <p>What can I help with?</p> : 
            chatHistory.map((chat, index) => (
              <div key={index}>
                <p>You: {chat.you}</p>
                <p>AI: {chat.ai}</p>
              </div>
            ))
          }
        </div>
        <input value={searched} onChange={(e) => setSearched(e.target.value)} onKeyPress={handleKeyPress} />
        <button onClick={handleUserInput}>Send</button>
      </div>
    </>
  );
};

export default Body;
