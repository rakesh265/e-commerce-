import React from 'react'

const Login = () => {
  return (
    <>
    <div className="signin">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        {errorMsg && <p className="error">{errorMsg}</p>}
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
  )
}

export default Login