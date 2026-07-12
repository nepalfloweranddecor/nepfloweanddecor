import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbar = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Shop", link: "/shop" },
  ];

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-[#f7f4ef]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-1xl font-medium">
          <span className="text-green-800">Nepal </span>
          <span className="text-red-900">Flower</span> & Decor
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  text-xl gap-8  absolute left-1/2 -translate-x-1/2 "
            style={{ fontFamily: "Federo, sans-serif" }}
        >
          {navbar.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="hover:text-green-800 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4"
         style={{ fontFamily: "Federo, sans-serif" }}>
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}