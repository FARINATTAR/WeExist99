import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/WeExists.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white p-4 shadow-lg font-poppins w-full">
      <div className="max-w-screen-xl w-full px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={logo} alt="WeExist Logo" className="h-12 w-12 rounded-4xl" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/what-we-do" label="What We Do" />
          <NavItem to="/leftover-to-life" label="Leftover to Life" />
          <NavItem to="/give-a-hand" label="Give a Hand" />
          <NavItem to="/gamified-giving" label="Gamified giving" />
          <NavItem to="/get-involved" label="Get Involved" />
        </ul>

        {/* Signup & Login Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-500 transition">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-black p-4 space-y-4">
          <NavItem to="/" label="Home" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/what-we-do" label="What We Do" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/leftover-to-life" label="Leftover to Life" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/give-a-hand" label="Give a Hand" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/badges" label="Badges" mobile onClick={() => setIsOpen(false)} />
          <NavItem to="/get-involved" label="Get Involved" mobile onClick={() => setIsOpen(false)} />
          <li>
            <Link to="/login" className="block text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-500 transition">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="block text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

function NavItem({ to, label, mobile, onClick }) {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`block px-4 py-2 text-lg font-medium transition-all duration-200 ${
          mobile ? "border-b border-gray-700" : ""
        } hover:text-yellow-600 hover:brightness-125 hover:shadow-lg`}
      >
        {label}
      </Link>
    </li>
  );
}
