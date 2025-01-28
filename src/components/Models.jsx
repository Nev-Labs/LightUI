import React from "react";
import Models from "./Models"; // Importing the Models component

const ClearChat = ({ onClearChat, onModelSelection }) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#0a122a] via-[#14001f] to-[#0a122a] text-gray-200 p-4 shadow-lg">
      {/* Clear Chat Button */}
      <button
        onClick={onClearChat}
        className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-500 transition shadow-md"
      >
        Clear Chat
      </button>

      {/* Models Dropdown */}
      <div className="mt-4">
        <Models onData={onModelSelection} />
      </div>
    </div>
  );
};

export default ClearChat;
