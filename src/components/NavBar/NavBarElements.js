import styled from 'styled-components'
import FaBars from '@meronex/icons/fa/FaBars';

export const Nav = styled.div`
  height: 50px;
  width: "100%";
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.084);
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-direction: row;
`
export const BurgerButton = styled(FaBars)`
  color: ${({ theme }) => theme.background};
  margin: 10px;
`;



