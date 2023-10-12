import styled from '@emotion/styled';

const StyledWrapperCarTitle = styled.div`
    display: ${props => props.display || 'flex'};  
  justify-content: ${props => props.justifyContent || 'space-between'};
  /* align-items: ${props => props.alignItems || 'center'};   */
  gap: ${props => props.gap || '4px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  
`;

export default StyledWrapperCarTitle;