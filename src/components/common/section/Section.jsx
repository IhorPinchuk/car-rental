const { default: StyledSection } = require("./Section.styled")

const Section = ({children}) => {
    return (
        <StyledSection>{children}</StyledSection>
    )
}

export default Section;