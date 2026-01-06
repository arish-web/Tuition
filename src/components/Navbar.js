import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Bright Tuition Center</h1>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-6">
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
          <a href="#home" className="hover:text-green-300">
            Home
          </a>
          <a href="#about" className="hover:text-green-300">
            About
          </a>
          <a  href="#enquiry" className="hover:text-green-300">
            Contact
          </a>
        </nav>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-blue-700 px-6 pb-4 space-y-2">
          <Link onClick={() => setOpen(false)} to="/" className="block">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block">
            About
          </Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
