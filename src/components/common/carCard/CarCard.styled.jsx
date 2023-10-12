import styled from '@emotion/styled';

const StyledCarCard = styled.li`
display: ${props => props.display || 'flex'};
justify-content: ${props => props.justifyContent || 'space-between'};
flex-direction: ${props => props.flexDirection || 'column'};
/* flex-wrap: ${props => props.flexWrap || 'wrap'}; */
width: ${props => props.width || 'calc((100% - 29px) / 5)'};
height: ${props => props.height || '426px'};
  border-radius: ${props => props.borderRadius || '14px'};
`;

export default StyledCarCard;