import './AuthHeader.css'
import {NavLink} from "react-router-dom";
import React from "react";
import Navigation from "../Navigation/Navigation";

function AuthHeader() {
  return (
    <header className="header-auth">
      <ul className="header-auth__bar">
        <li><NavLink className="header-auth__logo" title="На главную" to='/'/></li>
        <li><Navigation></Navigation></li>
        <li className="header-auth__user">
          <NavLink className="header-auth__user-account" to='/profile'>Аккаунт</NavLink>
          <span className="header-auth__user-icon"></span>
        </li>

      </ul>
    </header>
  )
}

export default AuthHeader