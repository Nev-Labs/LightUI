import React from "react";

const ClearChat = ({ onClearChat }) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#0a122a] via-[#14001f] to-[#0a122a] text-gray-200 p-4 shadow-lg">
      <button
        onClick={onClearChat}
        className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-500 transition shadow-md"
      >
        Clear Chat
      </button>
    </div>
  );
};

export default ClearChat;
