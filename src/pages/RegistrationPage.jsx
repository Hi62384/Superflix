import { useNavigate } from "react-router-dom"
import { useState } from "react"


function RegistrationPage({ setAccount }) {
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
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  //state for error text
  const [errorText, setErrorText] = useState("")


  const CreateAccount = () => {
    //get local stored accounts
    const accounts = JSON.parse(localStorage.getItem("superflix3000users")) || []

    setErrorText("")
    //if username length is incorrect, warn user
    if (username.length < 3 || username.length > 16) {
      setErrorText("Username should be between 3-16 characters!")
      return
    }
    //if password length is incorrect, warn user
    if (password.length < 8 || password.length > 50) {
      setErrorText("Password should be between 8-50 characters!")
      return
    }
    //if firstname length is incorrect, warn user
    if (firstName.length < 3 || firstName.length > 30) {
      setErrorText("First name is not proper!")
      return
    }
    //if lastname length is incorrect, warn user
    if (lastName.length < 3 || lastName.length > 30) {
      setErrorText("Last name is not proper!")
      return
    }

    //check if the account exists or not
    let accountExists = false
    accounts.forEach(element => {
      if (element.username == username) {
        setErrorText("Account with username already exists!")
        accountExists = true
      }
    });

    //if account does exist, return
    if (accountExists) return

    //add the new account to the local accounts array, and save it
    const account = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName
    }
    accounts.push(account)
    localStorage.setItem("superflix3000users", JSON.stringify(accounts))

    //set account and reroute to homepage
    setAccount(account)
    navigate("/")
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
          Create New Account
        </h1>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="First Name"
            style={{ ...textInputStyle, fontSize: "12.5px" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            style={{ ...textInputStyle, fontSize: "12.5px" }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <button
          style={{
            ...buttonStyle, backgroundColor: "#c90000ff",
          }}
          onClick={CreateAccount}
        >
          Create
        </button>
      </div>
      <h2 style={{ ...textStyle, color: "#ff0000ff" }}>{errorText}</h2>
    </div>
  );
}




export default RegistrationPage

