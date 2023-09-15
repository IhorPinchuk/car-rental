import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';


const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: tomato;
  }
`;

export default StyledNavLink;