import React from "react";

const Header = ({ siteName, navigation = [] }) => {
  return (
    <header className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <div className="logo">
          <h2 className="text-2xl font-bold text-white">{siteName}</h2>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navigation.length > 0 ? (
              navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href || "#"}
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))
            ) : (
              <>
                <li>
                  <a
                    href="#home"
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-300 relative group"
                  >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-300 relative group"
                  >
                    Services
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-300 relative group"
                  >
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white font-medium hover:text-gray-200 transition-colors duration-300 relative group"
                  >
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="hidden md:block">
          <button className="bg-white/20 border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
