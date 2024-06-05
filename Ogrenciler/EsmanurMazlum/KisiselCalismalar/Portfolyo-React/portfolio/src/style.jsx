import styled from "styled-components";

export const InfoDiv = styled.div`
    font-size: 1rem;
`

export const Header = styled.h2`
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    font-style: italic;
    font-size: 5rem;
    color: #000;
`

export const HeaderInfo = styled.h4`
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
`

export const ImgDiv = styled.div`
    background-image: url("assets/ben.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 21% 79% 26% 74% / 73% 22% 78% 27%;
    width: 25rem;
    height: 25rem;
`

export const SectionCream = styled.div`
    padding: 7rem 3rem;
`

export const Section = styled(SectionCream)`
    background-image: url("assets/sunflower-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
`

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &:hover .image-overlay {
    opacity: 1;
  }
`;

export const CardBody = styled.div`
  padding: 20px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
  opacity: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Button = styled.button`
  background-color: #4F6F52;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  margin:10px;
  cursor: pointer;
  font-family: "Fira Sans", sans-serif;
  &:hover {
    background-color: #1A4D2E;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
`;