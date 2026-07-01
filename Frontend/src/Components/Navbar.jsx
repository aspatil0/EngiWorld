import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import logo from "../assets/EWlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className={`flex justify-between items-center h-20 transition-all duration-300 ${
            scroll ? "rounded-b-3xl" : ""
          }`}
        >

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="EngiWorld"
              className="w-14"
            />

            <div>

              <h1 className="text-2xl font-bold text-[#FF6B6B]">
                EngiWorld
              </h1>

              <p className="text-xs text-gray-500">
                Learn • Build • Grow
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">

            {[
              ["Home", "/"],
              ["Features", "#features"],
              ["Departments", "#departments"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (

              <li key={label}>

                {href.startsWith("/") ? (

                  <Link
                    to={href}
                    className="relative hover:text-[#FF6B6B] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6B6B] hover:after:w-full after:transition-all"
                  >
                    {label}
                  </Link>

                ) : (

                  <a
                    href={href}
                    className="relative hover:text-[#FF6B6B] transition after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6B6B] hover:after:w-full after:transition-all"
                  >
                    {label}
                  </a>

                )}

              </li>

            ))}

          </ul>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/login"
              className="font-semibold text-[#FF6B6B] hover:opacity-80 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-[#FF6B6B] text-white px-6 py-3 rounded-xl hover:bg-[#ff5252] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Register
            </Link>

            <FaUserCircle
              className="text-3xl text-[#FF6B6B] cursor-pointer hover:scale-110 transition"
            />

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-[#FF6B6B]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">

          <ul className="flex flex-col p-6 gap-5">

            <Link onClick={closeMenu} to="/" className="hover:text-[#FF6B6B]">
              Home
            </Link>

            <a onClick={closeMenu} href="#features" className="hover:text-[#FF6B6B]">
              Features
            </a>

            <a onClick={closeMenu} href="#departments" className="hover:text-[#FF6B6B]">
              Departments
            </a>

            <a onClick={closeMenu} href="#gallery" className="hover:text-[#FF6B6B]">
              Gallery
            </a>

            <a onClick={closeMenu} href="#contact" className="hover:text-[#FF6B6B]">
              Contact
            </a>

            <hr />

            <Link
              onClick={closeMenu}
              to="/login"
              className="text-[#FF6B6B] font-semibold"
            >
              Login
            </Link>

            <Link
              onClick={closeMenu}
              to="/register"
              className="bg-[#FF6B6B] text-white py-3 rounded-xl text-center"
            >
              Register
            </Link>

          </ul>

        </div>

      )}

    </nav>
  );
}

export default Navbar;