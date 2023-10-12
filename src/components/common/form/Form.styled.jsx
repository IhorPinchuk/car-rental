import styled from "@emotion/styled";

const StyledForm = styled.form`
box-sizing: ${props => props.boxSizing || 'border-box'};
display: ${props => props.display || 'flex'};
justify-content: ${props => props.justifyContent || 'center'};
align-items: ${props => props.alignItems || 'end'};
gap: ${props => props.gap || '18px'};
padding: ${props => props.padding || '10px'};
`;

export default StyledForm;