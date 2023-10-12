import styled from '@emotion/styled';

const StyledButton = styled.button`
position: ${props => props.position || 'static'};
right: ${props => props.right || '0px'};
top: ${props => props.top || '0px'};
transform: ${props => props.transform || 'translate(0)'};
display: ${props => props.display || 'block'};
justify-content: ${props => props.justifyContent || 'center'};
align-items: ${props => props.alignItems || 'center'};
border-color: ${props => props.borderColor || 'transparent'};
border-radius: ${props => props.borderRadius || '12px'};
background-color: ${props => props.backgroundColor || 'var(--btn-bg-color)'};
color: ${props => props.color || 'var(--btn-text-color)'};
font-size: ${props => props.fontSize || '12px'};
  font-weight: ${props => props.fontWeight || '400'};
  line-height: ${props => props.lineHeight || '1.2'};
  margin: ${props => props.margin || '0px'};
  margin-top: ${props => props.marginTop || '0px'};
  padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
  cursor: ${props => props.paddingLeft || 'pointer'};
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  height: ${props => props.height || '100%'};
  max-height: ${props => props.maxHeight || '100%'};

  &:hover, &:focus {
    background-color: ${props => props.backgroundColorHover || 'var(--btn-hover-bg-color)'};
    color: ${props => props.colorHover || 'var(--btn-text-color)'};
  }  
`;

export default StyledButton;