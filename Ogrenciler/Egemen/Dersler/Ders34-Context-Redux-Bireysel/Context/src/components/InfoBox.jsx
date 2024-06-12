// import Button from "./Button"
import {useDeneme} from '../context/DenemeContext'
import styled from 'styled-components'

const InfoBoxStyled = styled.div`
    button{
        background-color: lightgreen;
    }
`

const InfoBox = () => {
    const {deneme, setDeneme} = useDeneme()
  return (
    <InfoBoxStyled>
        <button onClick={()=>setDeneme(deneme === "infoBox" ? "deneme" : "infoBox")}>InfoBox Button</button>
    </InfoBoxStyled>
  )
}

export default InfoBox