import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 20px 30px;
  width: 100%;
  position: relative;
  bottom: 0;
  z-index: 3;
`

export const MusicName = styled.div`
  flex: 1;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  flex: 2;
`

export const PlayerButton = styled.button`
  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: #fff;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const MusicLine = styled.div`
  position: relative;
  width: 600px;
  height: 3px;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #1db954;
    width: ${(props) => props.progress}%;
  }
`

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 150px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 16px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
  }

  input[type='range']::-moz-range-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #1db954;

    box-shadow: -407px 0 0 400px #1db954;
  }

  input[type='range']::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #1db954;
    box-shadow: -407px 0 0 400px #1db954;
  }
`
