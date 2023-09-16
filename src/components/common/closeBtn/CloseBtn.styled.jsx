import styled from "@emotion/styled";

const StyledCloseBtn = styled.div`
position: absolute;
top: 14px;
right: 14px;
cursor: pointer;
&:hover,
:focus {
  svg {
    stroke: red;
    transition: stroke 0.3s ease;
  }
}
`;

export default StyledCloseBtn;