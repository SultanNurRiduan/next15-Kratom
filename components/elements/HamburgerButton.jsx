import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="flex flex-col justify-center items-center space-y-1 w-10 h-10 focus:outline-none"
    >
      <span
        className={`bg-primary block h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-1" : ""
        }`}
      />
      <span
        className={`bg-primary block h-0.5 w-6 rounded-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`bg-primary block h-0.5 w-6 rounded-sm transform transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-1" : ""
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
