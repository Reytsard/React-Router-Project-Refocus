import React from "react";

function Button({ type, children, name }) {
  return (
    <button
      type={type}
      className={name}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
