import React from "react";

function Navbar({ onNavigate }) {
  return (
    <nav className="bg-[rgb(30,30,30)] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-[rgb(101,251,218)]">
            MyPortfolio
          </h1>

          <div className="flex space-x-10">
            <button
              className="text-lg hover:text-[rgb(101,251,218)] transition"
              onClick={() => onNavigate("banner")}
            >
              Home
            </button>

            <button
              className="text-lg hover:text-[rgb(101,251,218)] transition"
              onClick={() => onNavigate("skills")}
            >
              Skills
            </button>

            <button
              className="text-lg hover:text-[rgb(101,251,218)] transition"
              onClick={() => onNavigate("projects")}
            >
              Projects
            </button>

            <button
              className="text-lg hover:text-[rgb(101,251,218)] transition"
              onClick={() => onNavigate("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
