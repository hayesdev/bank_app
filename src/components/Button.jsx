import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 font-poppins font-medium text-[18px] text-primary rounded-xl outline-none bg-blue-gradient ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
