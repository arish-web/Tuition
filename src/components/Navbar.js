import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the color change after scrolling 50px
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/#categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Dynamic Class Logic
  const navBg = scrolled
    ? "bg-white/90 backdrop-blur-md shadow-md py-3"
    : "bg-transparent py-6";

  const textColor = scrolled
    ? "text-slate-900"
    : "text-white";

  const logoColor = scrolled
    ? "text-blue-600"
    : "text-white";

  const buttonClass = scrolled
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-blue-600 hover:bg-blue-50";

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
            <span className="font-black text-xl">W</span>
          </div>
          <h1 className={`font-bold text-xl tracking-tight transition-colors duration-500 ${textColor}`}>
            Wiss <span className={scrolled ? "text-blue-600" : "text-white/80"}>Learn</span> Space
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-bold transition-all duration-500 relative group ${textColor} hover:opacity-100 opacity-90`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full ${scrolled ? 'bg-blue-600' : 'bg-white'}`}></span>
            </Link>
          ))}

          <a
            href="#enquiry"
            className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-500 shadow-lg active:scale-95 ${buttonClass}`}
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors duration-500 ${textColor}`}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out shadow-2xl overflow-hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-8 py-10 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="block w-full bg-blue-600 text-white text-center py-4 rounded-2xl font-bold shadow-xl shadow-blue-200"
          >
            Admission Open
          </a>
        </div>
      </div>
    </header>
  );
}