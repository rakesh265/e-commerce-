import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import "../../Styles/Login.css"

const Login = () => {
  const { setIsAuth, userName, setUserName } = useContext(userContext);
  const [errMsg, setErrMsg] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim() === "" || password.trim() === "") {
      setErrMsg("Please Enter the Input");
      setIsAuth(false);
    } else {
      setErrMsg("");
      localStorage.setItem("userName", userName);
      localStorage.setItem("userEmail", emailInput)
      setIsAuth(true);
      setEmailInput("")
      setPassword("")
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        {errMsg && <p className="login-error">{errMsg}</p>}
        <input 
          type='text'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="login-username"
        />
        <label className="login-label">Email</label>
        <input
          type="email"
          className="login-input"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <label className="login-label">Password</label>
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-account">
          <span>Forgot password</span>
          <span>Don't have an account?</span>
        </div>
        <button type="submit" className="login-btn">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
