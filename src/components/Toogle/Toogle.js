import React from 'react';
import { func, string } from 'prop-types';
import Switch from 'react-switch';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div style={{margin: '10px'}}>
      <Switch
        onChange={toggleTheme}
        checked={theme === 'light' ? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={theme === 'light' ? 'grey' : 'white'}
        height={13}
        width={30}
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        handleDiameter={17}
      ></Switch>
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
