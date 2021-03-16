import React from 'react';
import { func, string } from 'prop-types';
import Switch from 'react-switch';
import { ToggleWrapper } from './ToggleSwitchElements';

const ToggleSwitch = ({ theme, toggleTheme }) => {
  return (
    <ToggleWrapper>
      <Switch
        onChange={toggleTheme}
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
      ></Switch>
    </ToggleWrapper>
  );
};

ToggleSwitch.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default ToggleSwitch;
