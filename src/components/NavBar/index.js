import React from 'react';
import { Nav, BurgerButton, NavImg } from './NavBarElements';
import ToggleSwitch from '../ToggleSwitch';
import navImage from '../../images/navImage.png';
import navImageDark from '../../images/navImageDark.png';

export const NavBar = ({ theme, themeToggler }) => {
  return (
    <header>
      <Nav>
        <BurgerButton size='2rem'/>
        <NavImg
          src={theme === 'light' ? navImage : navImageDark}
          alt='logo'
        ></NavImg>
        <ToggleSwitch theme={theme} toggleTheme={themeToggler}></ToggleSwitch>
      </Nav>
    </header>
  );
};

export default NavBar;
