import React, { useState } from "react";
import StarProgressBar from "./StarsProgressBar";


function FilmDisplay({ imagePath, movieName, releaseDate, stars, scale = 1, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: 150 * scale,
        height: (150 / 9) * 16 * scale,
        cursor: "pointer",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        userSelect: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={imagePath}
        alt={movieName}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: hovered ? "rgba(0, 0, 0, 0.6)" : "transparent",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 12,
          boxSizing: "border-box",
          transition: "background-color 0.3s ease",
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        {hovered && (
          <>
            <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{movieName}</h3>
            <p style={{ margin: "0 0 8px", fontSize: 14 }}>{releaseDate}</p>
            <StarProgressBar progress={stars / 5} size={20} />
          </>
        )}
      </div>
    </div>
  );
}


export default FilmDisplay

