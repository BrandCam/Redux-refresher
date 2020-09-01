import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavItem = styled(NavLink)`
  margin: 0 15px 0 0;
  color: white;
  &:hover {
    color: #5c9210;
  }
  &.selected {
    color: #5c9210;
  }
`;

export default NavItem;
