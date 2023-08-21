import './AuthHeader.css';
import {NavLink} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import AccountLogo from "../AccountLogo/AccountLogo";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function AuthHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <header className="header-auth">
      <ul className="header-auth__bar">
        <li>
          <NavLink className="header-auth__logo" title="На главную" to="/"/>
        </li>
        {isMobile ? (
          <li onClick={toggleMobileMenu}>
            <button className="header-auth__burger-icon"></button>
          </li>
        ) : (
          <>
            <li>
              <Navigation/>
            </li>
            <li className="header-auth__user">
              <AccountLogo></AccountLogo>
            </li>
          </>
        )}
      </ul>
      <BurgerMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}/>
    </header>
  );
}

export default AuthHeader;
