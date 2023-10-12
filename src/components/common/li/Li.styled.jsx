import styled from '@emotion/styled';

const StyledLi = styled.li`
display: ${props => props.display || 'inline'};
  border-radius: ${props => props.borderRadius || '14px'};
`;

export default StyledLi;