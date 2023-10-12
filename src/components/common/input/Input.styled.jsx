import styled from '@emotion/styled';

const StyledInput = styled.input`
box-sizing: ${props => props.boxSizing || 'border-box'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '48px'};
  font-family: 'Manrope', sans-serif;
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight || '500'};  
  line-height: ${props => props.lineHeight || '0.9'};  
  background-color: ${props =>
    props.backgroundColor || 'var(--input-bg-color)'};
  padding-top: ${props => props.paddingTop || '14px'};
  padding-bottom: ${props => props.paddingBottom || '14px'};
  padding-left: ${props => props.paddingLeft || '18px'};
  padding-right: ${props => props.paddingRight || '40px'};
  border: ${props => props.border || 'none'};
  border-right: ${props => props.borderRight || 'none'};
  border-radius: ${props => props.borderRadius || '14px'};  
  outline: ${props => props.outline || 'transparent'};

  ::placeholder {
    color: ${props => props.colorPlaceholder || 'var(--secondary-text-color)'};
    opacity: ${props => props.opacity || '1'};
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: ${props => props.colorPlaceholder || 'var(--secondary-text-color)'};
}

::-ms-input-placeholder { /* Microsoft Edge */
color: ${props => props.colorPlaceholder || 'var(--secondary-text-color)'};
}
  
  &:hover,
  &:focus {
    border: ${props =>
      props.borderHover || '1px solid var(--border-right-color-input-selectPrice)'};
  }
`;

export default StyledInput;
