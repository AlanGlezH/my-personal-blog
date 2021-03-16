import styled from 'styled-components';
import FaBars from '@meronex/icons/fa/FaBars';

const StyledBarButton = styled(FaBars)`
  color: ${({ theme }) => theme.background};
  margin: 10px;
`;

export default StyledBarButton;
