import styled from "@emotion/styled";

const StyledImg = styled.img`
width: ${props => props.width || '100%'};
height: ${props => props.height || '268px'};  
object-fit: cover;
  border-radius: ${props => props.borderRadius || '14px'};
`;

export default StyledImg;