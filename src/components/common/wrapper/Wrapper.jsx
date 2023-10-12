import StyledWrapper from "./Wrapper.styled";

const Wrapper = ({ children, ...rest }) => {
    return <StyledWrapper {...rest}>{children}</StyledWrapper>;
  };

  export default Wrapper;