import styled from 'styled-components';

export const ShortStyle = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
`;
export const GridArea = styled.div`
  background-color: var(--background-color);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.isSideBarVisible ? '24%' : '30%'}, 1fr));
  flex-wrap: wrap;
  justify-content: start;
  overflow: scroll;
  height: 100vh;
  padding-right: 10px
    @media (max-width: 480px) {
       justify-content: center;
  }
`;
export const TopCard = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow-clip-margin: content-box;
  overflow: clip;
  height: ${props => props.isSideBarVisible ? '180px' : '210px'};
  margin-bottom: 10px;
`;
export const TopBottom = styled.div`
    display: flex;
    line-height: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  
`;
export const VideoCard = styled.div`
  height: 318px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  
`;
export const ChannelPhoto = styled.img`
  border-radius: 50%;
  width: 40px;
  margin: 0px 10px 10px 0; 
`;
export const ViewDate = styled.div`
  display: flex;
  align-items: center;
`;
export const VideoName = styled.h3`
  color: var(--primary-text-color);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 3px;
  overflow: hidden;
`;
export const ChannelName = styled.h5`
  color: var(--sometext-color);
  font-weight: 400;
`;
export const TextCard = styled.p`
  color: #ababab;
  font-size: 0.8rem;
`;

export const DetailIcon = styled.div`
  margin-left: auto;
`;
export const MaterialIcons = styled.span`
  font-size: 5px;
  padding: 0 5px;
  color: #ababab;
`;
export const MaterialsIcons = styled.span`
  font-weight: 300;
`;
export const ChannelVideoImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  visibility: inherit;
  
`;