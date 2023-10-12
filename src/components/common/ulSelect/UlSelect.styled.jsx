import styled from '@emotion/styled';

const StyledUlSelect = styled.ul`
display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'start'};
  align-items: ${props => props.alignItems || 'start'};
  gap: ${props => props.gap || '8px'};  
   overflow: ${props => props.overflow || 'auto'};
  scroll-behavior: ${props => props.scrollBehavior || 'smooth'};
  height: ${props => props.height || '244px'};

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

export default StyledUlSelect;