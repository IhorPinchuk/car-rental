const { default: StyledNav } = require("./Nav.styled")

const Nav = ({children}) => {
    return (
        <StyledNav>{children}</StyledNav>
    )
}

export default Nav;