import styled from '@emotion/styled';

const StyledContainer = styled.div`
width: ${props => props.width || '100%'};
max-width: ${props => props.maxWidth || '1213px'};
padding-left: ${props => props.paddingLeft || '15px'};
padding-right: ${props => props.paddingRight || '15px'};
margin: ${props => props.margin || '0 auto'};    
`;

export default StyledContainer;
