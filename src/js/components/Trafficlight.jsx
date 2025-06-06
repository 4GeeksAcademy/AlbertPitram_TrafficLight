import React, { useState } from "react";

export default function TrafficLight() {
  const [color, setColor] = useState("red");

  const lightStyle = (lightColor) => ({
    width: "80px",
    height: "80px",
    margin: "10px auto",
    borderRadius: "50%",
    backgroundColor: lightColor,
    boxShadow: color === lightColor ? `0 0 20px 8px ${lightColor}` : "none",
    cursor: "pointer",
    transition: "box-shadow 0.3s ease",
  });

  return (
    <div
      style={{
        width: "120px",
        padding: "20px",
        backgroundColor: "#333",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <div style={lightStyle("red")} onClick={() => setColor("red")}></div>
      <div style={lightStyle("yellow")} onClick={() => setColor("yellow")}></div>
      <div style={lightStyle("green")} onClick={() => setColor("green")}></div>
    </div>
  );
}
