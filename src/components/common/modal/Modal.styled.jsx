import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.50);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContent = styled.div`
position: ${props => props.position || 'absolute'};
background-color: #ffffff;  
  padding: 24px;
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: ${props => props.width || '335px'};
  }

  @media screen and (min-width: 768px) {    
    width: ${props => props.width || '541px'};
  }

  @media screen and (max-height: 500px) and (orientation: landscape) {
    position: sticky;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;