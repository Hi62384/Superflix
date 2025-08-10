

function Footer() {
  const imageStyle = {
    width: "175px",
    cursor: "pointer"
  }

  const imageStyle2 = {
    width: "60px",
    cursor: "pointer"
  }

  const pointerCursorStyle = {
    cursor: "pointer"
  }

  return <div style={{
    background: "linear-gradient(to right, #400000ff, #0f0000ff)",
    height: "550px"
  }}>
    <div style={{ marginTop: "20px", marginLeft: "100px" }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <img style={imageStyle} src="../../src/images/DownloadItOnTheAppstore.png" alt="" />
        <img style={imageStyle} src="../../src/images/GetItOnGooglePlay.png" alt="" />
        <img style={imageStyle} src="../../src/images/GetItFromMicrosoft.png" alt="" />
      </div>
      <br />
      <br />
      <div style={{ display: "flex", gap: "225px", color: "white", fontFamily: "sans-serif" }}>
        <div>
          <h2>Watch</h2>
          <p style={pointerCursorStyle}>Spotlight</p>
          <p style={pointerCursorStyle}>Movies</p>
          <p style={pointerCursorStyle}>TV</p>
          <p style={pointerCursorStyle}>Free</p>
        </div>
        <div>
          <h2>My Account</h2>
          <p style={pointerCursorStyle}>My Superflix3000</p>
          <p style={pointerCursorStyle}>Account</p>
          <p style={pointerCursorStyle}>Settings</p>
          <p style={pointerCursorStyle}>Manage Device</p>
        </div>
        <div>
          <h2>Features</h2>
          <p style={pointerCursorStyle}>Links</p>
          <p style={pointerCursorStyle}>Family</p>
          <p style={pointerCursorStyle}>Desc To Digital</p>
          <p style={pointerCursorStyle}>Instawatch</p>
          <p style={pointerCursorStyle}>Movies Anywhere</p>
        </div>
        <div>
          <h2>Help</h2>
          <p style={pointerCursorStyle}>About Us</p>
          <p style={pointerCursorStyle}>Devices</p>
          <p style={pointerCursorStyle}>Support</p>
          <p style={pointerCursorStyle}>Forums</p>
          <p style={pointerCursorStyle}>Contact Us</p>
          <p style={pointerCursorStyle}>Jobs</p>
        </div>
      </div>
      <div style={{ gap: "10px", display: "flex", flexDirection: "row-reverse", marginRight: "125px", marginTop: "75px" }}>
        <img style={imageStyle2} src="Images/X.png" alt="" />
        <img style={imageStyle2} src="../../src/Images/Facebook.png" alt="" />
        <img style={imageStyle2} src="../../src/Images/Instagram.png" alt="" />
      </div>
    </div>
  </div>
}



export default Footer

