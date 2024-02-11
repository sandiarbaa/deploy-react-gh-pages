import React from "react";

const Button = ({ type, onClick = () => {} }) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white font-bold py-2 mt-4 rounded-md"
      onClick={() => onClick()}
    >
      Login
    </button>
  );
};

export default Button;
