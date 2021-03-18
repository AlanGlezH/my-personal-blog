import React from 'react';
import {
  ProfileContainer,
  WrapperImg,
  ProfileImg,
  ProfileDescription,
  ProfileGreeting,
  WrapperDescription,
} from './ProfileImageElements';
import profileImage from '../../images/profileImage.png';

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
      </WrapperDescription>
    </ProfileContainer>
  );
};
export default Profile;
