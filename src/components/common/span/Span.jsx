const { default: StyledSpan } = require("./Span.styled")

const Span = ({children}) => {
    return (
        <StyledSpan>{children}</StyledSpan>
    )
}

export default Span;