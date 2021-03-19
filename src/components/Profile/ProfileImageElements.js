import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
  max-width: 100%;
  align-items: center;
  padding: 120px 10px;
  margin: 0px auto;
  box-sizing: border-box;

  @media screen and (max-width: 990px) {
    padding: 70px 90px 80px;
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    padding: 50px 0px 80px;
    width: 100%;
  }
`;

export const WrapperImg = styled.div`
  height: 210px;
  width: 210px;
  background: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25rem;

  @media screen and (max-width: 990px) {
    width: 180px;
    height: 180px;
  }

  @media screen and (max-width: 750px) {
    width: 150px;
    height: 150px;
  }
`;

export const ProfileImg = styled.img`
  width: 290px;
  height: auto;

  @media screen and (max-width: 990px) {
    width: 240px;
  }

  @media screen and (max-width: 750px) {
    width: 200px;
  }
`;

export const WrapperDescription = styled.div`
  padding-left: 30px;

  @media screen and (max-width: 990px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 750px) {
    padding: 0px 25px 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileGreeting = styled.h1`
  font-size: 30px;
  font-weight: normal;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 990px) {
    font-size: 26px;
  }

  @media screen and (max-width: 750px) {
    font-size: 24px;
  }
`;

export const ProfileDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  line-height: 2;

  @media screen and (max-width: 750px) {
    font-size: 15px;
    text-align: center;
    margin: 0px 0px 1.7em;
  }
`;
