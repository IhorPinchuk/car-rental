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
  overflow: auto;

  ::-webkit-scrollbar {
    width: ${props => props.widthScrollbar || '8px'};  
}

::-webkit-scrollbar-thumb {
  background-color: ${props => props.backgroundColorScrollbarThumb || 'var(--scrollbar-thumb-bg-color)'};
  border-radius: ${props => props.borderRadiusScrollbarThumb || '4px'};   
}

::-webkit-scrollbar-track {
  background-color: ${props => props.backgroundColorScrollbarTrack || 'var(--scrollbar-track-bg-color)'};
  border-radius: ${props => props.borderRadiusScrollbarTrack || '4px'};  
}
`;

export const ModalContent = styled.div`
position: ${props => props.position || 'absolute'};
top: 15px;
/* height: 752px; */
  /* left: 50%;
  transform: translate(-50%, -50%); */
background-color: #ffffff;  
  padding: 15px 37px 40px 35px;
  border-radius: 24px;

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