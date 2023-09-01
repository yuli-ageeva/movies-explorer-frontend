import './AuthHeader.css';
import {NavLink, useLocation} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Navigation from '../Navigation/Navigation';
import AccountLogo from "../AccountLogo/AccountLogo";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function AuthHeader() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

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
        <header
            className={`header-auth ${location.pathname === '/' ? 'header-no-register-background' : 'header-auth-home-background'}`}>
            <nav>
                <ul className="header-auth__bar">
                    <li key="toMain">
                        <NavLink className="header-auth__logo" title="На главную" to="/"/>
                    </li>
                    {isMobile
                        ? (
                            <li key="mobileMenu" onClick={toggleMobileMenu}>
                                <button
                                    className={`header-auth__burger-icon ${location.pathname === '/' ? 'header-auth__burger-icon-white' : ''}`}
                                    type='button'>
                                </button>
                            </li>
                        )
                        : (
                            <>
                                <li key="navigation">
                                    <Navigation/>
                                </li>
                                <li key="accountLogo" className="header-auth__user">
                                    <AccountLogo></AccountLogo>
                                </li>
                            </>
                        )}
                </ul>
                <BurgerMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}/>
            </nav>
        </header>
    );
}

export default AuthHeader;
