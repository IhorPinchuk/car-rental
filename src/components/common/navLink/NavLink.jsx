const { default: StyledNavLink } = require("./NavLink.styled")

const NavLink = ({children, ...rest}) => {
    return (
        <StyledNavLink {...rest}>{children}</StyledNavLink>
    )
}

export default NavLink;