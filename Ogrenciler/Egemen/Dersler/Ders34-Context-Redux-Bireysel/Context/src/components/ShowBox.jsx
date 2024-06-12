import {useDeneme} from '../context/DenemeContext'
import styled from 'styled-components'

const ShowBoxStyled = styled.div`
  height: 100px;
  background-color:wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 10px;
`

const ShowBox = () => {
    const {deneme} = useDeneme()
  return (
    <ShowBoxStyled>{deneme}</ShowBoxStyled>
  )
}

export default ShowBox