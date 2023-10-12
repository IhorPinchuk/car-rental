import StyledUlSelect from "./UlSelect.styled";


const UlSelect = ({children, ...rest}) => {
    return (
        <StyledUlSelect {...rest}>{children}</StyledUlSelect>
    )
}

export default UlSelect;