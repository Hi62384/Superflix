

function ContentSection({ children, image }) {
  return <div style={{ background: "linear-gradient(to right, #380000ff, #000000ff)", display: "flex", flexDirection: "row" }}>
    <h2 style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2.5rem",
      fontWeight: "700",
      background: "linear-gradient(90deg, #ff4d4d, #ffcc00, #4dff88)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "2px",
      textTransform: "uppercase",
      padding: "10px 0",
      textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
      width: "300px",
      margin: "100px"
    }}>
      {children}
    </h2>
    <div style={{ flex: "1", display: "flex" }}>
      <img src={image} alt="" style={{ objectFit: "contain", height: "310px", width: "100%" }} />
    </div>
  </div>
}



export default ContentSection
