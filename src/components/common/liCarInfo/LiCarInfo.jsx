import StyledLiCarInfo from "./LiCarInfo.styled";

const LiCarInfo = ({children, ...refs}) => {
    return (
<StyledLiCarInfo {...refs}>{children}</StyledLiCarInfo>
    )
}

export default LiCarInfo;