import React from 'react';
import { Nav, BurgerButton, NavImg } from './NavBarElements';
import Switch from 'react-switch';
import navImage from '../../images/navImage.png';
import navImageDark from '../../images/navImageDark.png';
import { useDarkMode } from '../../context/darkmode-context';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const { theme, themeToggler } = useDarkMode();

  return (
    <header>
      <Nav>
        <BurgerButton size='2em' />
        <Link to='/'>
          <NavImg
            src={theme === 'light' ? navImage : navImageDark}
            alt='logo'
          />
        </Link>
        <Switch
          onChange={themeToggler}
          checked={theme === 'light' ? false : true}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor='#3B83BD'
          onColor='#3B83BD'
          height={13}
          width={30}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
          handleDiameter={17}
        />
      </Nav>
    </header>
  );
};

export default NavBar;
