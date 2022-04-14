import React, { useState } from "react";
import './index.css';

const SigninformHooks = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[checked,setChecked] = useState(false);
  const inputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "checkbox")
    {
      setChecked(e.target.checked)
    }
  };
  
  const onsubmission = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
    setChecked(false);
  };
  return (
    <div className="ui cards" id="main">
      <div className="ui card" id="form">
        <div className="content">
          <h1>Sign in</h1>
          <form onSubmit={onsubmission} className="ui form">
            <div className="field">
              <label htmlFor="">Email address</label>
              <input type="email" name="email" value={email} onChange={inputChange} placeholder="Enter email"/>
            </div>
           <div className="field">
              <label htmlFor="">Password</label> 
              <input type="password" name="password" value={password} onChange={inputChange}placeholder="Enter password"/>
            </div>
            <div className="field">
              <div className="ui checkbox">
               <input type="checkbox" checked={checked} name="checkbox" onChange={inputChange}/>
               <label htmlFor="">Remember me</label>
              </div>
            </div>
            <button className="fluid ui primary button" type="submit" >Submit</button>
            <br/>
            <span className="right floated">Forgot <a href="#">password?</a></span>
          </form> 
        </div>
      </div> 
    </div>    
  );
};

export default SigninformHooks;
