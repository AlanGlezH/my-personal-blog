import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FaBars from '@meronex/icons/fa/FaBars';
import MdClose from '@meronex/icons/ios/MdClose';

export const Nav = styled.nav`
  height: 80px;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  padding: 40px 65px;
  box-shadow: ${(props) =>
    props.active ? 'rgb(0 0 0 / 8%) 0px 0px 15px' : 'none'};
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

export const ToggleButton = styled.button`
  background: none;
  border: none;
  display: none;
  margin: 0;
  padding: 0;

  &:focus:not(:focus-visible) {
    outline: none;
  }

  @media screen and (max-width: 990px) {
    display: block;
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

export const CloseButton = styled(MdClose)`
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
  width: 190px;
  height: auto;

  @media screen and (max-width: 990px) {
    width: 160px;
  }

  @media screen and (max-width: 750px) {
    margin-left: 0;
    width: 120px;
    height: auto;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  margin-left: auto;
  margin-right: 80px;
  padding: 0px;

  @media screen and (max-width: 990px) {
    background: ${({ theme }) => theme.body};
    margin-right: 0;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 70px;
    width: 100%;
    align-items: center;
    padding: 20px 0;
    right: ${(props) => (props.mobileActive ? '0' : '100%')};
    transition: right 0.5s;
    height: calc(100% - 70px);
    overflow-y: auto;
  }

  @media screen and (max-width: 750px) {
    top: 50px;
    padding: 20px 0;
    height: calc(100% - 50px);
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => (props.linkActive ? '#3B83BD' : props.theme.text)};
  font-family: 'Poppins';
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 20px;

  &:hover {
    color: #3b83bd;
  }

  @media screen and (max-width: 990px) {
    color: ${(props) => (props.linkActive ? '#3B83BD' : props.theme.text)};
    font-size: 2rem;
    line-height: 60px;
  }

  @media screen and (max-width: 750px) {
    font-size: 1.5rem;
    line-height: 50px;
  }
`;
