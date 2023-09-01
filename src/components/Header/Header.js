import React from 'react';

import './Header.css'
import AuthHeader from '../AuthHeader/AuthHeader';
import MainHeader from '../MainHeader/MainHeader'
import CurrentUserContext from "../../context/CurrentUserContext";


function Header() {
    const currentUser = React.useContext(CurrentUserContext);
    if (currentUser) {
        return <AuthHeader/>;
    } else return <MainHeader/>;
}

export default Header;
