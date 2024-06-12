// import Button from './Button'
import {useDeneme} from '../context/DenemeContext'
import styled from 'styled-components'

const SocialBoxStyled = styled.div`
button{
    background-color: lightblue;
}
`

const SocialBox = () => {
    const {deneme, setDeneme} = useDeneme()
  return (
    <SocialBoxStyled>
        <button onClick={()=>setDeneme(deneme === "SocialBox" ? "deneme" : "SocialBox")}>SocialBox Button</button>
    </SocialBoxStyled>
  )
}

export default SocialBox