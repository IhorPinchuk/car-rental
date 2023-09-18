import styled from "@emotion/styled";

const StyledA = styled.a`
width: ${props => props.width || '168px'};
height: ${props => props.height || '44px'};
background-color: ${props => props.height || 'red'};
border-radius: ${props => props.borderRadius || '12px'};
`;

export default StyledA;