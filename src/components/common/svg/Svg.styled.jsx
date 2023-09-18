import styled from "@emotion/styled";

const StyledSvg = styled.svg`
width: 18px;
height: 18px;
stroke: ${props => props.stroke || 'rgba(255, 255, 255, 0.8)'};
fill: ${props => props.fill || 'transparent'};
`;

export default StyledSvg;