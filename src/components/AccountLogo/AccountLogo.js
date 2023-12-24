import './AccountLogo.css'
import {NavLink, useLocation} from "react-router-dom";
import React from "react";

function AccountLogo() {
    const location = useLocation();

    return (
        <div
            className={`user-account ${location.pathname === '/' ? 'user-account-green-background' : 'user-account-white-background'}`}>
            <NavLink className="user-account__logo" to="/profile">
                Аккаунт
            </NavLink>
            <span className="user-account__icon"></span>
        </div>
    )
}

export default AccountLogo