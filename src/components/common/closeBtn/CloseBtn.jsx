import StyledCloseBtn from "./CloseBtn.styled";

const CloseBtn = ({onClick, children}) => {
    return (
        <StyledCloseBtn onClick={onClick}>{children}</StyledCloseBtn>
    )
}

export default CloseBtn;