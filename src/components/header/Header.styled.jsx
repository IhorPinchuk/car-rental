import styled from '@emotion/styled';

const HeaderStyled = styled.header`
margin-bottom: ${props => props.marginBottom || '20px'};
padding-top: ${props => props.paddingTop || '20px'};
padding-bottom: ${props => props.paddingBottom || '20px'};
`;

export default HeaderStyled;