import styled from "styled-components";

export const ImgCard = styled.img`
    width:40%;
    margin:auto
`

export const GithubCard = styled.div`
   background:rgba(217, 217, 217,.7)
`
export const GithubCardA = styled.a`
   &:hover{
        animation: shakeY;
        --animate-repeat: infinite;
        animation-duration: 2s;
   }
`