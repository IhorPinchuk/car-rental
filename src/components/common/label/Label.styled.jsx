import styled from "@emotion/styled";

const StyledLabel = styled.label`
position: ${props => props.position || 'static'};
left: ${props => props.left || '0px'};
display: ${props => props.display || 'block'};
max-width: ${props => props.maxWidth || '100%'};
font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || '500'};  
  line-height: ${props => props.lineHeight || '0.9'};
  color: ${props => props.color || 'var(--secondary-text-color)'};
  
`;

export default StyledLabel;