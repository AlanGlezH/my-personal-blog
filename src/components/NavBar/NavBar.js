import React from 'react';
import { StyledNavBar } from './styledNavBar';
import BarButton from '../BarButton/BarButton'
import Toogle from '../Toogle/Toogle';

export const NavBar = ({ theme, themeToggler }) => {
  return (
    <StyledNavBar>
      <BarButton></BarButton>
      <h1 style={{ margin: 'auto' }}>AlanGlezH</h1>
      <Toogle theme={theme} toggleTheme={themeToggler}></Toogle>
    </StyledNavBar>
  );
};

export default NavBar;
