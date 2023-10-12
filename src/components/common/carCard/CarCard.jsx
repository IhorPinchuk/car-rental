import StyledCarCard from "./CarCard.styled";

const CarCard = ({children, ...rest}) => {
    return (
        <StyledCarCard {...rest}>{children}</StyledCarCard>
    )
}

export default CarCard;