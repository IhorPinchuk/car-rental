import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  position: ${props => props.position || 'static'};
  top: ${props => props.top || '0px'};
  left: ${props => props.left || '0px'};
  box-sizing: ${props => props.boxSizing || 'border-box'};
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'start'};
  /* text-align: ${props => props.textAlign || 'center'}; */
  vertical-align: middle;
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ${props => props.flexWrap || 'wrap'};
  gap: ${props => props.gap || '0px'};
  max-width: ${props => props.maxWidth || '100%'};
  width: ${props => props.width || '100%'};
  /* height: ${props => props.height || '100%'}; */
  padding-top: ${props => props.paddingTop || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
  margin-right: ${props => props.marginRight || '0px'};  
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || 'none'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  z-index: ${props => props.zIndex || 'auto'};
`;

export default StyledWrapper;
