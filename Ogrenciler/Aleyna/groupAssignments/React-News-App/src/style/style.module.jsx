import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.2rem;
`;

export const Navbar = styled.div`
  background-color: #1d2b53;
  padding: 0.75rem;
`;
export const NavbarItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

export const NavText = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    color: red;
  }
`;

export const FooterArea = styled.div`
  background-color: #102950;
`;

export const FooterText = styled.p`
  color: #fff;
  text-align: center;
  padding: 0.75rem 2rem;
`;

export const SearchInput = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 0.4rem;
  width: 300px;
  &:focus {
    outline: solid 1px red;
  }
`;

export const HeroArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0rem;
`;
export const HeroImg = styled.img`
  width: 50%;
  height: 300px;
  border-radius: 0.4rem;
`;

export const HeroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

export const HeroSpan = styled.span`
  padding: 0.5rem 1rem;
  background-color: #102950;
  width: fit-content;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
`;

export const HeroText = styled.p`
  font-size: 1.2rem;
  color: black;
`;

export const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #102950;
  color: white;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
  &:hover {
    background-color: red;
  }
`;

export const NewsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0rem;
`;

export const NewsCards = styled.div`
  width: 24%;
  border: 1px solid #ccc;
  height: 750px;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: space-between;
  padding: 1rem;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NewsCardImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 0.4rem;
`;

export const NewsTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
`;

export const NewsSpan = styled.span`
  padding: 0.5rem 1rem;
  background-color: #102950;
  width: fit-content;
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
`;

export const Currency = styled.div`
  background-color: #bf3131;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;
