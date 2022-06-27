import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  border-radius: 5px;
  background: var(--green);
  padding: 10px;
  color: var(--shape);
  cursor: pointer;
  text-decoration: none ;

  &:hover {
    filter: brightness(1.1);
  }

`;