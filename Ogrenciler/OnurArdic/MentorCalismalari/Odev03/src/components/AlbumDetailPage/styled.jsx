import styled from 'styled-components'

export const AlbumDetailWrapper = styled.div`
  background-color: #121212;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  color: white;
`

export const AlbumTop = styled.div`
  background-color: #121212;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`

export const AlbumsMusicList = styled.div`
  width: 100%;
  padding-top: 20px;
`

export const MusicHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 150px 100px;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #b3b3b3;
  padding: 10px 0;
`

export const MusicHeaderItem = styled.div`
  font-size: 0.9rem;
`

export const MusicList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
`

export const MusicRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 150px 100px;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const MusicItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
  }
`
