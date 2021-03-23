import React, { useEffect, useState } from 'react';
import {
  Nav,
  BurgerButton,
  NavImg,
  CloseButton,
  NavMenu,
  NavLink,
  ToggleButton,
} from './NavBarElements';
import Switch from 'react-switch';
import navImage from '../../images/navImage.png';
import navImageDark from '../../images/navImageDark.png';
import { useDarkMode } from '../../context/darkmode-context';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [active, setActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const { theme, themeToggler } = useDarkMode();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const currenPath = window.location.pathname;

  return (
    <header>
      <Nav active={active}>
        <ToggleButton onClick={toggleMobileMenu}>
          {mobileMenuActive ? (
            <CloseButton size='2em' />
          ) : (
            <BurgerButton size='2em' />
          )}
        </ToggleButton>

        <Link to='/'>
          <NavImg
            src={theme === 'light' ? navImage : navImageDark}
            alt='logo'
          />
        </Link>
        <NavMenu mobileActive={mobileMenuActive}>
          <NavLink
            to='/'
            linkActive={currenPath === '/' ? true : false}
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to='/blog'
            linkActive={currenPath === '/blog' ? true : false}
            onClick={toggleMobileMenu}
          >
            Blog
          </NavLink>
        </NavMenu>
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
