import styled from "@emotion/styled";

const StyledCloseBtn = styled.div`
position: ${props => props.position || 'absolute'};
top: ${props => props.top || '14px'};
right: ${props => props.right || '14px'};
cursor: ${props => props.cursor || 'pointer'};

&:hover,
:focus {
  svg {
    stroke: ${props => props.strokeHover || 'var(--btn-hover-bg-color)'};
    transition: ${props => props.transitionHover || 'stroke 0.3s ease'};
      }
}
`;

export default StyledCloseBtn;