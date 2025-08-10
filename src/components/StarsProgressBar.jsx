import React from "react";

export default function StarProgressBar({ progress, size = 30, gap = 0 }) {
  const clampedProgress = Math.max(0, Math.min(progress, 1));
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    const fillAmount = Math.min(
      Math.max(clampedProgress * totalStars - i, 0),
      1
    );

    stars.push(
      <div
        key={i}
        style={{
          position: "relative",
          width: size,
          height: size,
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {/* Background star */}
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            color: "#000000ff",
            fontSize: size,
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            display: "block",
          }}
        >
          ★
        </span>

        {/* Filled star */}
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${fillAmount * 100}%`,
            height: "100%",
            overflow: "hidden",
            color: "gold",
            fontSize: size,
            lineHeight: 1,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
            display: "block",
          }}
        >
          ★
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: gap,
        alignItems: "center",
      }}
    >
      {stars}
    </div>
  );
}
