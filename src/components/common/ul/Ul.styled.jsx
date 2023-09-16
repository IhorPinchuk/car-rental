import styled from '@emotion/styled';

const StyledUl = styled.ul`
display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '8px'};
`;

export default StyledUl;