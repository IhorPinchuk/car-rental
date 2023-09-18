import StyledSvg from "./Svg.styled";

const Svg = ({onClick, children, ...rest}) => {
    return (
        <StyledSvg onClick = {onClick} {...rest}>{children}</StyledSvg>
    )
}

export default Svg;