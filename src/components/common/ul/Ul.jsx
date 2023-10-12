import StyledUl from "./Ul.styled";

const Ul = ({children, ...rest}) => {
    return (
        <StyledUl {...rest}>{children}</StyledUl>
    )
}

export default Ul;