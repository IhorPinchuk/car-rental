const { default: StyledMain } = require("./Main.styled")

const Main = ({children}) => {
    return (
        <StyledMain>{children}</StyledMain>
    )
}

export default Main;