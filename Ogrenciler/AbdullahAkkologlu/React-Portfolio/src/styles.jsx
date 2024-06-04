import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto 10rem auto;
`;
export const LandingContainer = styled(Container)`
  padding-top: 10rem;
`;
export const LandingTitle = styled.h3`
  font-size: 5rem;
  font-weight: bolder;
`;
export const LandingDesc = styled.h6`
  color: gray;
  margin: 2rem 0;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const RowBetween = styled(Row)`
  justify-content: space-between;
`;
export const UnderLineDiv = styled(RowBetween)`
  border-bottom: 2px solid black;
  margin-bottom: 0.75rem;
`;
export const Col = styled.div`
  width: ${(props) => props.width}%;
`;
export const LandingImageDiv = styled(Col)`
  background-image: url("assets/IMG_2126.JPG");
  animation: morph 3s ease-in-out infinite;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 35rem;
  width: 35rem;
  transition: all 1s ease-in-out;
`;
export const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const TechsUl = styled(Ul)`
  display: flex;
  gap: 1rem;
`;
export const TechLi = styled.li`
  transition: 0.3s all ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;
export const SocialsRow = styled(Row)`
  display: flex;
  gap: 2rem;
  $a:hover {
    color: orangered;
  }
`;
export const Button = styled.a`
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ConnectButton = styled(Button)`
  gap: 0.5rem;
  color: white;
  background-color: black;
  margin-top: 2.5rem;
`;
export const Image = styled.img`
  width: 100%;
`;
export const ProjectName = styled.h1`
  padding-bottom: 0.75rem;
`;
export const ProjectDesc = styled.p`
  text-align: justify;
`;
export const PaddingY = styled.div`
  padding: 5rem 0;
`;
export const ArticleDiv = styled(Col)`
  margin: 1rem 0;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 1rem;
  cursor: pointer;
`;
export const ArticleImage = styled.img`
  width: 100%;
  margin: auto 0;
`;
export const ArticleContent = styled(Col)`
  padding: 0.5rem 1rem 0.5rem 0;
`;
export const MediumPicture = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
export const FlexAlign = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ArticleTitle = styled.h5`
  font-weight: 700;
`;
export const ArticleDesc = styled.p`
  color: gray;
  text-align: justify;
`;
export const ArticleImageDiv = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
