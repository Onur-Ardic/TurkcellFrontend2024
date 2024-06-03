import styled from "styled-components";

export const ImgCard = styled.img`
    width:40%;
    margin:auto;
    transition: all .5s;
    &:hover{
      transform:scale(1.1);
    }
`

export const GithubCard = styled.div`
   background:rgba(217, 217, 217,.7);
   .personal-data:hover {
      box-shadow: 0 0 15px 15px rgba(0,0,0,.2);
      transition: all .5s;
   }
   .personal-data:hover {
      box-shadow: 0 0 15px 15px rgba(0,0,0,.5);
   }
`
export const GithubCardA = styled.a`
   &:hover{
        animation: shakeY;
        animation-iteration-count: infinite;
        animation-duration: 2s;
   }
`