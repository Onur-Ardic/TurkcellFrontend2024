import styled from "styled-components"

const Flex = styled.div`
display:flex;
align-items:center;
flex-direction:column;
gap:2rem; 

@media (max-width : ${({theme}) => theme.responsive} ){
    flex-direction:column;
    text-align:center;
}


`

export default Flex