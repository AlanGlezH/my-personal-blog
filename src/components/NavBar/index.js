import React from 'react';
import { Nav, BurgerButton } from './NavBarElements';
import ToggleSwitch from '../ToggleSwitch';

export const NavBar = ({ theme, themeToggler }) => {
  return (
    <header>
      <Nav>
        <BurgerButton size="2rem" ></BurgerButton>
        <h1 style={{ margin: "auto" }}>AlanGlezH</h1>
        <ToggleSwitch theme={theme} toggleTheme={themeToggler}></ToggleSwitch>
      </Nav>
    </header>
  );
};

export default NavBar;
