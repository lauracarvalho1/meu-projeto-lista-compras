import React from "react";

function Input({ type = "text", style = {}, ...props }) {
  return (
    <input
      type={type}
      style={{
        padding: "10px 12px",
        borderRadius: "6px",
        border: "1px solid #ddd",
        minWidth: type === "number" ? "120px" : "220px",
        ...style,
      }}
      {...props}
    />
  );
}

export default Input;
