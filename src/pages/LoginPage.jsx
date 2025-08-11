import { useNavigate } from "react-router-dom"
import { useState } from "react"


function LoginPage({ setAccount }) {
  const buttonStyle = {
    color: "white",
    fontSize: "25px",
    border: "0",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  }

  const textInputStyle = {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  }

  const textStyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "0px",
    textAlign: "center",
    marginBottom: "30px",
  }

  const navigate = useNavigate()


  //states for login data
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  //state for error text
  const [errorText, setErrorText] = useState("")



  const Login = () => {
    //get local stored accounts
    const accounts = JSON.parse(localStorage.getItem("superflix3000users")) || []

    let accountExists = false
    //loop through all accounts
    accounts.forEach(element => {
      //if the provided username matches an existing username
      if (element.username == username) {
        accountExists = true
        //if entered password is correct, set account and reroute to homepage
        if (element.password == password) {
          setAccount(element)
          navigate("/")
          return
          //if password is incorrect, show password incorrect error
        } else {
          setErrorText("Wrong password!")
          return
        }
      }
    });
    //if account doesnt exist, show account doesnt exist error
    if (!accountExists) setErrorText("Account doesn't exist!")
  }


  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{
          marginTop: "100px",
          marginBottom: "50px",
          width: "355px",
          background: "linear-gradient(to right, #4c0000ff, #000000ff)",
          borderRadius: "8px",
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h1
          style={textStyle}
        >
          Sign In
        </h1>

        <input
          type="text"
          placeholder="Username"
          style={textInputStyle}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={textInputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a target="_blank" href="ForgotPasswordPage.html" style={{ color: "#6587ffff" }}>Forgot Your Password?</a>
        <button
          style={{
            ...buttonStyle, backgroundColor: "#c90000ff",
          }}
          onClick={Login}
        >
          Login
        </button>
        <button style={{
          ...buttonStyle,
          border: "3px solid #c90000ff",
          background: "transparent"
        }}
          onClick={() => navigate("/Register")}>Create New Account</button>
      </div>
      <h2 style={{ ...textStyle, color: "#ff0000ff" }}>{errorText}</h2>
    </div>
  );
}




export default LoginPage

