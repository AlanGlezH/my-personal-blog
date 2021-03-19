import styled from 'styled-components';
import FaBars from '@meronex/icons/fa/FaBars';

export const Nav = styled.nav`
  height: 80px;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  padding: 20px 45px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.084);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${({ theme }) => theme.body};

  @media screen and (max-width: 990px) {
    height: 70px;
    padding: 15px 25px;
  }

  @media screen and (max-width: 750px) {
    height: 50px;
    padding: 5px 15px;
  }
`;

export const BurgerButton = styled(FaBars)`
  display: none;

  @media screen and (max-width: 990px) {
    display: inline;
    color: ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 750px) {
    display: inline;
    color: ${({ theme }) => theme.text};
  }
`;

export const NavImg = styled.img`
  width: 160px;
  height: auto;
  @media screen and (max-width: 750px) {
    margin-left: 0;
    width: 120px;
    height: auto;
  }
`;
