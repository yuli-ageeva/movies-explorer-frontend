import React from 'react';
import {useLocation} from 'react-router-dom';
import './Header.css'
import AuthHeader from '../AuthHeader/AuthHeader';
import MainHeader from '../MainHeader/MainHeader'


function Header({isAuthPage}) {
  const location = useLocation();

  if (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {
    return <AuthHeader isAuthPage={isAuthPage}/>;
  } else return <MainHeader/>;
}

export default Header;
