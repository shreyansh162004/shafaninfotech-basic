import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import shafahnLogo from "../assets/shafan logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={shafahnLogo}
            alt="Shafan Infotech"
            className="h-12 w-12 object-contain rounded-full shadow-md glow-cyan"
          />
          <span className="hidden md:inline font-display text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Shafan Infotech
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-cyan-600 transition-colors font-accent text-sm"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-3 items-center">
          <motion.a
            href="https://www.instagram.com/sf.infotech_jabalpur/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:shadow-lg inline-flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={18} />
            Instagram
          </motion.a>
          <motion.a
            href="https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg inline-flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-900 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/30"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-cyan-600 font-medium transition-colors text-sm"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 4 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-3 pt-2 flex-col">
              <motion.a
                href="https://www.instagram.com/sf.infotech_jabalpur/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center p-3 rounded-xl transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:shadow-lg font-semibold"
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
                <span className="ml-2">Instagram</span>
              </motion.a>
              <motion.a
                href="https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center p-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg"
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
