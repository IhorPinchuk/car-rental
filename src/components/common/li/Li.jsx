import StyledLi from "./Li.styled"

const Li = ({children, ...refs}) => {
    return (
<StyledLi {...refs}>{children}</StyledLi>
    )
}

export default Li;