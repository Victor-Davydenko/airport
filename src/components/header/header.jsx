import React from 'react';

import './header.scss';
import logo from '../../images/logo@2x.webp'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <a href="/" className="logo">
            <img src={logo} alt="logo"/>
          </a>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__list-item">
                <a href="#" className="navigation__link">Пасажирам</a>
              </li>
              <li className="navigation__list-item">
                <a href="#" className="navigation__link">Послуги IEV</a>
              </li>
              <li className="navigation__list-item">
                <a href="#" className="navigation__link">VIP</a>
              </li>
              <li className="navigation__list-item">
                <a href="#" className="navigation__link">Партнерам</a>
              </li>
              <li className="navigation__list-item">
                <a href="#" className="navigation__link">Прес-центр</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default Header
