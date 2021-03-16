import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  const setMode = (savedTheme) => {
    localStorage.setItem('theme',savedTheme);
    setTheme(savedTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setMode(savedTheme);
    setMountedComponent(true);
  }, []);

  return [
    theme,
    themeToggler,
    mountedComponent
  ];
};

export default useDarkMode;
