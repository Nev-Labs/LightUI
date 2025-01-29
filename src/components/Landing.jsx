import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#0a122a] via-[#14001f] to-[#0a122a] text-gray-200 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Introducing <span className="text-blue-500">LightUI</span>
      </h1>

      {/* Description */}
      <p className="text-center text-sm md:text-lg max-w-2xl mb-6">
        LightUI is your personalized AI
        assistant, seamlessly integrating with locally hosted models using{" "}
        <span className="text-green-400 font-medium">Ollama</span>. With full
        control over your AI interactions, LightUI ensures privacy, speed, and
        reliability while keeping all data processing offline.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        {/* Get Started Button */}
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 shadow-lg w-full md:w-auto"
          onClick={() => navigate("/chat")} // Navigate to /chat route
        >
          Get Started
        </button>

        {/* Learn More about Ollama Button */}
        <button
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 shadow-lg w-full md:w-auto"
          onClick={() => window.open("https://ollama.ai", "_blank")}
        >
          Learn More about Ollama
        </button>
      </div>
    </div>
  );
};

export default Landing;
