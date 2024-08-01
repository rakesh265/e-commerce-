import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import "../Styles/Login.css"

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
      localStorage.setItem("userName", emailInput);
      setIsAuth(true);
      setEmailInput("")
      setPassword("")
    }
  };

  return (
    <>
      <div className="signin">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          {errMsg && <p className="error">{errMsg}</p>}
          <input type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            className="input"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="account">
            <span>Forgot password</span>
            <span>Don't have an account?</span>
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
