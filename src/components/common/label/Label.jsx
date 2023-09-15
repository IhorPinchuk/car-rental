const { default: StyledLabel } = require("./Label.styled");

const Label = ({ children, ...rest }) => {
    return <StyledLabel {...rest}>{children}</StyledLabel>;
  };

  export default Label;