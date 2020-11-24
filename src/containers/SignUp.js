import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [data, setData] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/sign-up", {
        email,
        username,
        password
      });
      setData(response.data)
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return(
    <div className="signup-container">
      <h2>SIGN UP !</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Enter a username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          />

        <input
          placeholder="Enter an email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          />

        <input
          placeholder="Enter a password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          />

        <button type="submit" value="Join Us !"></button>

      </form>
    </div>
  )
}

export default SignUp;