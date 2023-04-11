import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  background-color: #3a3e3e;
`;

export const StyleLink = styled(NavLink)`
  text-decoration: none;
  font-size: 36px;
  align-items: center;
  margin-right: 10px;
  padding: 4px;
  text-decoration: none;
  color: #fff;
  &.hover{
    color: #5e00a3;
  }

  &.active {
    color: #5e00a3;
    border-bottom: 3px solid;
  }
`;
