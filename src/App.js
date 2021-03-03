import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyle';
import NavBar from './components/NavBar/NavBar';
import { lightTheme, darkTheme } from './components/themes';
import Toogle from './components/Toogle/Toogle';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className='App'>
          <NavBar></NavBar>
          <Toogle theme={theme} toggleTheme={themeToggler}>
            Switch theme
          </Toogle>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
