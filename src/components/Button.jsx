import React from "react";

function Button({ type, children, name }) {
  return (
    <button type={type} className={name}>
      {children}
    </button>
  );
}

export default Button;
