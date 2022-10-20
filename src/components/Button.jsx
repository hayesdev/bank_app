import React from "react";

// use styles prop for button in other components
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 font-poppins font-medium text-[18px] text-primary rounded-xl outline-none bg-blue-gradient ${styles}`}
    >
      <a href="#home">Get Started</a>
    </button>
  );
};

export default Button;
