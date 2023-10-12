import styled from "@emotion/styled";

const StyledSvg = styled.svg`
padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
width: ${props => props.width || '18px'};
height: ${props => props.height || '18px'};
stroke: ${props => props.stroke || 'rgba(255, 255, 255, 0.8)'};
fill: ${props => props.fill || 'transparent'};
`;

export default StyledSvg;