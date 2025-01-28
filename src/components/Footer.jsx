import React from "react";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-6 bg-gradient-to-b from-[#0a122a] via-[#14001f] to-[#0a122a] text-gray-200 text-center">
      <p className="text-sm md:text-base">
        &copy; 2025 <span className="text-blue-500">LightUI</span>. All rights
        reserved.
      </p>

      {/* Powered by Ollama */}
      <div className="mt-2">
        <a
          href="https://ollama.ai"
          className="text-gray-500 hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Ollama
        </a>
      </div>

      {/* Social Media Links */}
      <div className="mt-4 flex justify-center gap-6">
        <a
          href="#"
          className="text-gray-200 hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} /> {/* GitHub Icon */}
        </a>
        <a
          href="#"
          className="text-gray-200 hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} /> {/* Instagram Icon */}
        </a>
        <a
          href="#"
          className="text-gray-200 hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={24} /> {/* Discord Icon */}
        </a>
      </div>

      {/* Footer Routes */}
      <div className="mt-4">
        <Link
          to="/about"
          className="text-gray-500 hover:text-gray-600 mx-2"
        >
          About
        </Link>
        <Link
          to="/chat"
          className="text-gray-500 hover:text-gray-600 mx-2"
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Footer;
