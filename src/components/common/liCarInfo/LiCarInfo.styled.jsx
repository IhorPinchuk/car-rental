import styled from '@emotion/styled';

const StyledLiCarInfo = styled.li`
display: inline-block;  
  position: relative;
  
  
  &:not(:last-child) {     	
    margin-right: 12px;
  }

  
  &:not(:last-child)::after {
    content: '';

    position: absolute;
    top: 0px;
    right: -6px;
    height: 16px;
    width: 1px;
    background: #12141720;}
`;

export default StyledLiCarInfo;
;