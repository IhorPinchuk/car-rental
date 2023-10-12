import StyledForm from "./Form.styled"

const Form = ({children, ...rest}) => {
    return (
        <StyledForm {...rest}>{children}</StyledForm>
    )
}

export default Form