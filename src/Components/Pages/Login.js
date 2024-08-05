import React, { useState, useContext } from 'react';
import { userContext } from '../../App';
import "../../Styles/Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setIsAuth, userName, setUserName } = useContext(userContext);
  const [errMsg, setErrMsg] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim() === "" || password.trim() === "") {
      setErrMsg("Please enter both email and password");
    } else {
      setErrMsg("");
      localStorage.setItem("userName", userName);
      setIsAuth(true);
      setEmailInput("");
      setPassword("");
      naviagte("/")
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className='login-heading'>Sign In</h1>
        {errMsg && <p className="login-error">{errMsg}</p>}
        
        <label htmlFor="username" className="login-label">Username</label>
        <input 
          id="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="login-input"
          placeholder='Enter your name here'
        />
        <label htmlFor="email" className="login-label">Email</label>
        <input
          id="email"
          type="email"
          className="login-input"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder='exapmle@gmail.com'
        />
        <label htmlFor="password" className="login-label">Password</label>
        <input
          id="password"
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='xxxxxxxx'
        />
        <button type="submit" className="login-btn">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
