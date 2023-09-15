const { default: StyledText } = require("./Text.styled")

const Text = ({children}) => {
    return (
        <StyledText>{children}</StyledText>
    )
}

export default Text;