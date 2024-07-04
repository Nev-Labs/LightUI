import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const isActive = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });
  return (
    <>
      {/* for desktop */}
      <div className=" bg-gray-300 w-full">
        <button onClick={toggleNav} className="md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="header hidden md:grid md:grid-cols-12   py-5">
          <div className="col-span-2 col-start-2 text-2xl flex font-semibold">

            <NavLink to="/">LightUI</NavLink>
          </div>

          <div className=" col-span-4 col-start-8 grid md:grid-cols-4">
            <div className=" col-span-2 text-xl font-semibold">
              <NavLink style={isActive} to="/about">
                About Us
              </NavLink>
            </div>
            <div className=" col-span-2 col-start-3 text-xl font-semibold">
              <NavLink style={isActive} to="/contact">
                Contact Us
              </NavLink>
            </div>
          </div>
        </nav>
        {/* for mobile  */}
        <div className="grid grid-rows-1 grid-flow-col md:hidden text-2xl font-semibold">
          <NavLink to="/">LightUI</NavLink>
        </div>
        <div
          className={`grid grid-cols-2 grid-flow-col ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <nav className=" gird grid-rows-2 grid-flow-col p-4  md:hidden">
            <div className="text-xl p-2">
              <NavLink style={isActive} to="/about">
                About Us
              </NavLink>
            </div>
            <div className="text-xl p-2">
              <NavLink style={isActive} to="/contact">
                Contact Us
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
