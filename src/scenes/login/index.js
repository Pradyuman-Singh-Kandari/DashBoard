import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"

const initialState = { name: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [uName, setUName] = useState("");
  const navigate = useNavigate();

  var strClass = "form-group";
  const findName = async() => {
    const url = "seller/details/" + localStorage.getItem("userEmail");
    const response = await fetch(url, {
      method: "GET",
      headers: {}
    });
// console.log(url)
    if (response.ok) {
      
    const data = await response.json();
    localStorage.setItem("userName", data.name);
    // console.log(data);
    }
  }

  const switchMode = (e) => {
    e.preventDefault();

    setForm(initialState);
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setClicked(true);
    const allFormValue = {"name": form.fullName, "email":form.email, "password":form.password, "confirmPassword":form.confirmPassword}

    if(isSignUp){
      try{
        console.log(allFormValue);
        let res = await fetch("/seller/register", {
          // mode: 'no-cors',
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(allFormValue)
        });

        if(res.status == 200){
          setLoading(false);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userEmail", allFormValue.email);
          localStorage.setItem("userName", allFormValue.name);
          navigate('/dashboard');
        }
        else{
          localStorage.setItem("isLoggedIn", false);
        }
      } catch(error) {
        console.log(error.message);
      }
    }
    else{
      const loginFormValue = {"email":form.email, "password":form.password}
       console.log(loginFormValue);
      try{
        let res = await fetch("/seller/login", {
          // mode: 'no-cors',
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(loginFormValue)
        });

        if(res.status == 200){
          setLoading(false);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userEmail", allFormValue.email);

          findName();
          navigate('/dashboard');
        }
        else{
          localStorage.setItem("isLoggedIn", false);
        }
      } catch(error) {
        console.log(error.message);
      }
    }
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width: "100%",  height: '100%', background: 'linear-gradient(to right, #2980b9, #6dd5fa)'}}>
   <form className="form-ele" method="POST" onSubmit={handleSubmit}>
   <h1 class="super" >Login Page</h1>
  {isSignUp && (
    <div className="first-row">
      <div className="form-group">
        <input name="fullName" className="form-input" onChange={handleChange} autoFocus />
        <label>Full Name</label>
      </div>
    </div>
  )}
  <div className="form-group">
    <input name="email" className="form-input" type="email" onChange={handleChange} />
    <label>Email</label>
  </div>
  <div className="form-group spe">
    <input name="password" className="form-input" type={showPassword ? "text" : "password"} onChange={handleChange} />
    <label>Password</label>
    <div className="icon-eye" onClick={handleShowPassword}>
      <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
    </div>
  </div>
  {isSignUp && (
    <div className="form-group">
      <input name="confirmPassword" className="form-input" type="password" onChange={handleChange} />
      <label>Confirm Password</label>
    </div>
  )}

  <button type="submit" className={`form-btn ${isSignUp ? "signup" : "signin"}`}>
    {isSignUp ? "Sign Up" : "Sign In"}
  </button>
  {isSignUp ? (
    ""
  ) : (
    <button className="form-btn acc-change animated-button" >
      Forgot Password?
    </button>
  )}
  <button onClick={switchMode} className="form-btn fg-pass animated-button">
    {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
  </button>
</form>
    </div>
  )
}

export default Auth