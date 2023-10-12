import styled from '@emotion/styled';

const StyledText = styled.p`
font-size: ${props => props.fontSize || '12px'};
  font-weight: ${props => props.fontWeight || '400'};
  line-height: ${props => props.lineHeight || '1.2'};
margin-top: ${props => props.marginTop || '0px'};
margin-right: ${props => props.marginRight || '0px'};
margin-bottom: ${props => props.marginBottom || '0px'};
margin-right: ${props => props.marginRight || '0px'};
color: ${props => props.color || 'var(--primary-text-color)'};

span {
  color: ${props => props.color || 'var(--accent-text-color)'};
}
`;

export default StyledText;