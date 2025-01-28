import { Link, useLocation } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import Models from "./Models"; // Importing the Models component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Get current route

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleModelSelection = (selectedModel) => {
    console.log("Selected Model:", selectedModel);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-[#0a122a] via-[#0f1e3d] to-[#0a122a] text-gray-200 grid grid-cols-5 h-16 px-6 shadow-lg">
        {/* Logo */}
        <div id="logo" className="order-1 flex items-center">
          <Link
            to="/"
            className="text-lg flex items-center gap-2 font-bold hover:text-gray-300 transition"
          >
            <p className="text-2xl text-blue-400">
              <TbBulb />
            </p>
            <span className="text-blue-300">LightUI</span>
          </Link>
        </div>

        {/* Desktop Menu - Only visible if not on /chat */}
        {location.pathname !== "/chat" && (
          <div
            id="moreRoutes"
            className="order-2 hidden md:flex items-center space-x-6"
          >
            <p>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </p>
            <p className="hover:text-blue-400 transition">Contact</p>
            <p className="hover:text-blue-400 transition">Source Code</p>
          </div>
        )}

        {/* Models Dropdown */}
        {location.pathname !== "/chat" && (
          <div
            id="modelsDropdown"
            className="order-3 hidden md:flex items-center justify-center"
          >
            <Models onData={handleModelSelection} />
          </div>
        )}

        {/* Mobile Menu (shown when isOpen is true) */}
        {isOpen && (
          <div
            ref={menuRef}
            id="mobileMenu"
            className="order-2 rounded-3xl flex flex-col items-center justify-center bg-gradient-to-b from-[#0a122a] via-[#0f1e3d] to-[#0a122a] md:hidden absolute left-0 right-0 top-16 w-full py-4 space-y-4 shadow-xl border border-gray-700 z-40"
          >
            <p>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </p>
            <p className="hover:text-blue-400 transition">Contact</p>
            <p className="hover:text-blue-400 transition">Source Code</p>
            {/* Models Dropdown in Mobile Menu */}
            <div className="w-full text-center">
              <Models onData={handleModelSelection} />
            </div>
          </div>
        )}

        {/* Models Dropdown - Only on /chat */}
        {location.pathname === "/chat" && (
          <div className="order-4 col-start-4 flex items-center justify-end gap-4">
            <Models onData={handleModelSelection} />
          </div>
        )}

        {/* Sign In Button */}
        <div
          id="signIn"
          className="order-5 col-start-5 flex items-center justify-end"
        >
          <button className="bg-blue-600 text-white py-1 md:px-4 px-2 rounded-lg hover:bg-blue-500 transition shadow-md">
            Sign In
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          id="toggleHamburger"
          className="md:hidden order-6 flex items-center justify-end"
        >
          <div
            className="text-2xl text-blue-400 cursor-pointer"
            onClick={toggleHamburger}
          >
            {isOpen ? <RxCross2 /> : <IoReorderThreeOutline />}
          </div>
        </div>
      </nav>
    </>
    //   <div className="header">
    //     <div className="bar">
    //       <div className="logo">
    //         <Link to="/">LightUI</Link>
    //       </div>
    //       <div className="otherele">
    //         <p>
    //           <Link to="/about">About Us</Link>
    //         </p>
    //         <p>Contact Us</p>
    //       </div>
    //     </div>
    //   </div>
  );
};
export default Header;
