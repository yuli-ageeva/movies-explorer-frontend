import './MainHeader.css'
import React from "react";
import {Link} from "react-router-dom";

function MainHeader() {
  return (
    <header className="header">
      <Link className="header__logo" title="На главную" to='/'/>
      <nav>
        <ul className="header__navigate">
          <li>
            <Link to="/signup" className="header__link header__link-signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link to="/signin" className="header__link header__link-signin">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
