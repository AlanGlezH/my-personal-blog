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

const Profile = () => {
  return (
    <ProfileContainer>
      <WrapperImg>
        <ProfileImg src={profileImage}></ProfileImg>
      </WrapperImg>
      <WrapperDescription>
        <ProfileGreeting>
          ¡Hola! Soy <b>Alan</b>
        </ProfileGreeting>
        <ProfileDescription>
          He estado estudiando Ingeniería de Software durante los últimos 4
          años. Desarrollar software de calidad es algo que me encanta y
          realmente me apasiona. El aprendizaje continuo se ha vuelto un estilo
          de vida para mí, por lo que en este blog me encantaría compartir un
          poco de lo que aprendo contigo.
        </ProfileDescription>
        <ContactUl>
          <ContactLi>
            <a href='https://www.linkedin.com/in/alanglezh/'>
              <LinkedinIcon data-tip='LinkedIn' size='1.7rem' />
            </a>
          </ContactLi>
          <ContactLi>
            <a href='https://github.com/AlanGlezH'>
              <GitHubIcon data-tip='GitHub' size='1.7rem' />
            </a>
          </ContactLi>
          <ContactLi>
            <a href='https://twitter.com/AlanGlez14'>
              <TwitterIcon data-tip='Twitter' size='1.7rem' />
            </a>
          </ContactLi>
        </ContactUl>
      </WrapperDescription>
      <ReactTooltip effect='solid' />
    </ProfileContainer>
  );
};
export default Profile;
