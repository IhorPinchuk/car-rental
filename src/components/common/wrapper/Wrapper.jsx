import StyledWrapper from "./Wrapper.styled";

const WrapperComponentModal = ({ children, ...rest }) => {
    return <StyledWrapper {...rest}>{children}</StyledWrapper>;
  };

  export default WrapperComponentModal;