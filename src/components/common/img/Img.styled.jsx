import styled from "@emotion/styled";

const StyledImg = styled.img`
width: ${props => props.width || '274px'};
  height: ${props => props.height || '268px'};
  border-radius: ${props => props.borderRadius || '14px'};
`;

export default StyledImg;