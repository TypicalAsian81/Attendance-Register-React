import React from "react";
import Styles from './login.module.css';
import { Color } from "three";
export const Login = () => {
    return (
      
    <div className="bg">
      <div className="login-page">
  <div className="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button className="login-button">login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
<div className="regard">
<p><b>Kindly refer to your webmail credentials for login!</b></p>
<p div className="info">Made with ❤️ by Iman | Aatheesh | Ahnaf</p>
</div>

</div>


// {/* <div className="login-form-wrap">
//   <h2>Login</h2>
//   <form className="login-form">
//     <p>
//     <input type="text" className="username" name="username" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
//     </p>
//     <p>
//     <input type="email" id="email" name="email" placeholder="Email Address" required/><i class="validation"><span></span><span></span></i>
//     </p>
//     <p>
//     <button type="submit" id="login" value="Login"/>
//     </p>
//   </form>
//   <div id="create-account-wrap">
//     <p>Not a member?</p>
//     <p><a href="#" >Create Account</a></p>
//   </div>
// </div> */}

    )
  };
  
export default Login;