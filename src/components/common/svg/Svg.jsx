import StyledSvg from "./Svg.styled";

const Svg = ({children, ...rest}) => {
    return (
        <StyledSvg {...rest}>{children}</StyledSvg>
    )
}

export default Svg;