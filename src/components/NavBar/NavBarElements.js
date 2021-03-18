import styled from 'styled-components';
import FaBars from '@meronex/icons/fa/FaBars';

export const Nav = styled.nav`
  height: 40px;
  width: 100%;
  position: sticky;
  top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.084);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${({ theme }) => theme.body};
  @media screen and (max-width: 750px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const BurgerButton = styled(FaBars)`
  display: none;
  @media screen and (max-width: 750px) {
    display: inline;
    color: ${({ theme }) => theme.text};
    margin: 10px;
  }
`;

export const NavImg = styled.img`
  width: 160px;
  height: auto;
  margin-left:4rem;
  @media screen and (max-width: 750px) {
    margin-left:0;
    width: 120px;
    height: auto;
  }
`;
