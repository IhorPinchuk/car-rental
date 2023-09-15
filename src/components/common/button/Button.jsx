import StyledButton from "./Button.styled";

const Button = ({ onClick, name, children, type, ...rest }) => {
    return (
      <StyledButton onClick={onClick} name={name} type={type} {...rest}>
        {children}
      </StyledButton>
    );
  };

  export default Button;