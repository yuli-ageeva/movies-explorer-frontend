import './AccountLogo.css'
import {NavLink} from "react-router-dom";
import React from "react";

function AccountLogo() {
  return (
    <div className="user-account">
      <NavLink className="user-account__logo" to="/profile">
        Аккаунт
      </NavLink>
      <span className="user-account__icon"></span>
    </div>
  )
}

export default AccountLogo