import StyledInput from "./Input.styled";

const Input = ({ onChange, value, ...rest }) => {
    return <StyledInput onChange={onChange} value={value} {...rest} />;
  };

  export default Input;