import React from 'react';
import {
  ProfileContainer,
  WrapperImg,
  ProfileImg,
  ProfileDescription,
  ProfileGreeting,
  WrapperDescription,
  ContactUl,
  ContactLi,
  LinkedinIcon,
  GitHubIcon,
  TwitterIcon,
} from './ProfileImageElements';
import profileImage from '../../images/profileImage.png';
import ReactTooltip from 'react-tooltip';
import { useDarkMode } from '../../context/darkmode-context';
import { description } from '../../constants/ProfileDescription';

const Profile = () => {
  const { theme } = useDarkMode();

  return (
    <ProfileContainer>
      <WrapperImg>
        <ProfileImg src={profileImage} alt='profile' />
      </WrapperImg>
      <WrapperDescription>
        <ProfileGreeting>
          Hi! I'm <b>Alan</b>
        </ProfileGreeting>
        <ProfileDescription>
          {description}
        </ProfileDescription>
        <ContactUl>
          <ContactLi>
            <a href='https://www.linkedin.com/in/alanglezh/' target="_blank" rel="noreferrer">
              <LinkedinIcon data-tip='LinkedIn' size='1.8em' />
            </a>
          </ContactLi>
          <ContactLi>
            <a href='https://github.com/AlanGlezH' target="_blank" rel="noreferrer">
              <GitHubIcon data-tip='GitHub' size='1.8em' />
            </a>
          </ContactLi>
          <ContactLi>
            <a href='https://twitter.com/AlanGlez14' target="_blank" rel="noreferrer">
              <TwitterIcon data-tip='Twitter' size='1.8em' />
            </a>
          </ContactLi>
        </ContactUl>
      </WrapperDescription>
      <ReactTooltip effect='solid' type={theme === 'dark' ? 'light' : 'dark'} />
    </ProfileContainer>
  );
};
export default Profile;
