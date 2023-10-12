import styled from '@emotion/styled';

const StyledWrapperBackground = styled.div`  
  display: ${props => props.display || 'inline-block'}; 
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  padding: ${props => props.padding || '7px 14px'};
  border-radius: ${props => props.borderRadius || '35px'};
  background-color: ${props => props.backgroundColor || 'var(--rental-conditions-bg-color)'};
  
`;

export default StyledWrapperBackground;