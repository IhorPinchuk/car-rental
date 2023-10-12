const { default: StyledText } = require("./Text.styled")

const Text = ({children, ...rest}) => {
    return (
        <StyledText {...rest}>{children}</StyledText>
    )
}

export default Text;