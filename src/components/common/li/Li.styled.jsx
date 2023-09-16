import styled from '@emotion/styled';

const StyledLi = styled.li`
width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: ${props => props.borderRadius || '14px'};
`;

export default StyledLi;