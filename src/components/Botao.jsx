import React from "react";

function Botao({ children, style = {}, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 14px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 600,
        minWidth: "100px",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Botao;
