import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <h1 className="headerLogo">refocus</h1>
      <div className="headerOptions">
        <ul>
          <NavLink to="posts">Blog</NavLink>
          <li>Our Courses</li>
          <li>Free webinars</li>
          <li>Reviews</li>
          <li className="signUpOption" id="signUp">
            Sign up
          </li>
          <li className="logInOption" id="logInButton">
            Log in
          </li>
        </ul>
      </div>
      <div className="menu-burger">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Header;
