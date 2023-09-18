import StyledA from "./A.styled"

const A = ({children, ...rest}) => {
    return (
        <StyledA {...rest}>{children}</StyledA>
    )
}

export default A;