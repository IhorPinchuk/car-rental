import styled from '@emotion/styled';

const StyledUl = styled.ul`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '29px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
`;

export default StyledUl;
