import React from 'react';
import './BurgerMenu.css';
import {NavLink} from 'react-router-dom';
import AccountLogo from '../AccountLogo/AccountLogo';
import Navigation from "../Navigation/Navigation";

function BurgerMenu({isOpen, onClose}) {

  return (
    <>
      <div className={`burger-menu ${isOpen ? 'burger-menu_open' : ''}`}>
        <div className="burger-menu__content">
          <button className="burger-menu__close-button" type='button' onClick={onClose}>
            <span className="burger-menu__close-icon"></span>
          </button>
          <ul className="burger-menu__items">
            <li className="burger-menu__item">
              <NavLink
                to="/"
                className="burger-menu__link"
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <Navigation onClick={onClose}></Navigation>
            </li>
            <li className="burger-menu__item">
              <AccountLogo onClick={onClose}></AccountLogo>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="burger-menu-overlay"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}

export default BurgerMenu;
