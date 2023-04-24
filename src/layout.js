import { Outlet, Link } from "react-router-dom";
import React from "react";
import Styles from './layout.module.css';

const Layout = () => {
  return (
    <div>
<ul className="order">
  <li><a class="active" href="/">Home</a></li>
  <li><a href="login">Login</a></li>
  <li><a href="catalogue">Catalogue</a></li>
  <li><a href="digital">Attendance</a></li>
  <li><a href="https://www.nitt.edu/" target="_blank" >About</a></li>
</ul>
<div className="img">
            <img src="https://www.nitt.edu/cms/templates/nitt_13inner/images/nitt.png"></img>
          </div>
      

      <Outlet />
    </div>
  )
};

export default Layout;