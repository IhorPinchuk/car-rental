const { default: StyledContainer } = require("./Container.styled")

const Container = ({children, ...rest}) => {
    return (
        <StyledContainer {...rest}>{children}</StyledContainer>
    )
}

export default Container;