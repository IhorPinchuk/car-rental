import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || '500'};
  line-height: ${props => props.lineHeight || '1.2'};
  text-decoration: ${props => props.textDecoration || 'none'};
  color: ${props => props.color || 'var(--secondary-text-color)'};

  &:hover,
  &:focus {
    color: ${props => props.colorActive || 'var(--accent-text-color)'};    
  }

  &.active {
    color: ${props => props.colorActive || 'var(--accent-text-color)'};
  }
`;

export default StyledNavLink;
