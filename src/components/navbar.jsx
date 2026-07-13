import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbar = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Designs", link: "/designs" },
    { name: "Contact", link:"/contact"}
  ];

  return (
    <motion.nav 
    initial={{y:-100,opacity:0}}
    animate={{y :0 , opacity:1}}
    transition={{duration:0.6 , ease: "easeOut"}}
    className="w-full px-6 py-4 shadow-md bg-[#f7f4ef]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-medium">
          <span className="text-green-800 text-5xl" style={{ fontFamily: "Federo, sans-serif" }}>Nepal </span>
          <span className="text-red-900"  style={{ fontFamily: "Federo, sans-serif" }}>Flower</span> & Decor
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
  <button className="relative px-5">
    <FiShoppingCart className="text-2xl" />
  </button>
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
    </motion.nav>
  );
}