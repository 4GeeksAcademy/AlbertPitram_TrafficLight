import React from "react";
import TrafficLight from "/workspaces/AlbertPitram_TrafficLight/src/js/components/Trafficlight.jsx"; // Ajusta la ruta según donde esté tu archivo

export default function App() {

	return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <TrafficLight />
    </div>
  );
}