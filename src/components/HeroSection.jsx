import Img1 from "../../public/HeroSectionFilms/Duo.png";
import Img2 from "../../public/HeroSectionFilms/Redditor.png";
import Img3 from "../../public/HeroSectionFilms/ClashOfTheCoders.png";
import Img4 from "../../public/HeroSectionFilms/TexasFatMan.png";
import Img5 from "../../public/HeroSectionFilms/ToyInsanity.png";
import Img6 from "../../public/HeroSectionFilms/Chemicalling.png";
import { useState } from "react";


function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [Img1, Img2, Img3, Img4, Img5, Img6]

  const arrowBaseStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "0",
    height: "0",
    borderStyle: "solid",
    cursor: "pointer",
    filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))",
    backgroundColor: "transparent",
  };

  const dotStyle = (isActive) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#09a5ffff" : "rgba(255,255,255,0.6)",
  });

  //move current index to the right
  const GoRight = () => {
    let newValue = currentIndex + 1
    if (newValue >= images.length) {
      newValue = 0
    }
    setCurrentIndex(newValue)
  }

  //move current index to the left
  const GoLeft = () => {
    let newValue = currentIndex - 1
    if (newValue < 0) {
      newValue = images.length - 1
    }
    setCurrentIndex(newValue)
  }


  return <div style={{ backgroundColor: "#242424ff", margin: "0px" }}>
    <h1 style={{
      textAlign: "center",
      fontFamily: "impact",
      fontWeight: "700",
      fontSize: "100px",
      color: "#222",
      textTransform: "uppercase",
      textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
      background: "linear-gradient(90deg, #ff0000ff, #5f0000ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      userSelect: "none",
      margin: "1rem 0",
    }}>The Most Demanded Movies And Tv Shows Of 2021!</h1>
    <div style={{
      backgroundColor: "#242424ff",
      height: "700px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <button style={{
        ...arrowBaseStyle,
        left: "10px",
        borderWidth: "24px 20px 24px 0",
        borderColor: "transparent #a90000ff transparent transparent",
      }} onClick={GoLeft}></button>
      <img src={images[currentIndex]} alt="" style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }} />
      <button style={{
        ...arrowBaseStyle,
        right: "10px",
        borderWidth: "24px 0 24px 20px",
        borderColor: "transparent transparent transparent #a90000ff",
      }} onClick={GoRight}></button>
      <div style={{
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        backgroundColor: "#1f1f1fff",
        padding: "8px",
        borderRadius: "10px"
      }}>
        {Array.from({ length: images.length }).map((_, idx) => (
          <div
            key={idx}
            style={dotStyle(idx == currentIndex)}
          />
        ))}
      </div>
    </div>
  </div>
}


export default HeroSection
