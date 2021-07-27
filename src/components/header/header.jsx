import React from 'react';

import './header.scss';
import logo from '../../images/logo@2x.webp'
import MainNavigation from "../navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <a href="/" className="logo">
            <img src={logo} alt="logo"/>
          </a>
          <MainNavigation />
        </div>
      </div>
    </header>
  )
};

export default Header
