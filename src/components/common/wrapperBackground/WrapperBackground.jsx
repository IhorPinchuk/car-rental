import StyledWrapperBackground from "./WrapperBackground.styled";

const WrapperBackground = ({children, ...rest}) => {
    return (
        <StyledWrapperBackground {...rest}>{children}</StyledWrapperBackground>
    )
}

export default WrapperBackground;