import styled from "@emotion/styled";

const StyledTextInformationCar = styled.p`
font-size: ${props => props.fontSize || '12px'};
line-height: ${props => props.lineHeight || 'calc(18 / 12)'};
font-weight: ${props => props.fontWeight || '400'};
color: ${props => props.color || 'var(--primary-text-color)'};
`;

export default StyledTextInformationCar;