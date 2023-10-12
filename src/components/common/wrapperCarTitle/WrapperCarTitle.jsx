const { default: StyledWrapperCarTitle } = require("./WrapperCarTitle.styled")

const WrapperCarTitle = ({children, ...rest}) => {
    return (
        <StyledWrapperCarTitle {...rest}>{children}</StyledWrapperCarTitle>
    )
}

export default WrapperCarTitle;