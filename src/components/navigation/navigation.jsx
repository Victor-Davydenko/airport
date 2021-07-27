import React from 'react';

import './navigation.scss';

import navigationLinks from './navigationLinks';
import NavigationListItem from "./navigationListItem";
const MainNavigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationLinks.links.map((link, idx) => <NavigationListItem linkText={link} key={idx} />)}
      </ul>
    </nav>
  )
};

export default MainNavigation
