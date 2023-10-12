import styled from "@emotion/styled";

const StyledA = styled.a`
display: ${props => props.display || 'inline-block'};
background-color: ${props => props.backgroundColor || 'var(--btn-bg-color)'};
padding: ${props => props.padding || '12px 50px'};
border-radius: ${props => props.borderRadius || '12px'};
text-decoration: ${props => props.textDecoration || 'none'};
color: ${props => props.color || 'var(--btn-text-color)'};

&:hover, &:focus {
    background-color: ${props => props.backgroundColorHover || 'var(--btn-hover-bg-color)'};
    color: ${props => props.colorHover || 'var(--btn-text-color)'};
  }
`;

export default StyledA;