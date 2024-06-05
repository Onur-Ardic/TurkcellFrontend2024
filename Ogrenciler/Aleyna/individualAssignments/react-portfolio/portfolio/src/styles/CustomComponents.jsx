import styled from "styled-components";

export const HeaderContainer = styled.header`
padding-bottom:4rem;
padding-top:6rem;
  background: linear-gradient(
    103deg,
    rgba(237, 197, 180, 1) 4%,
    rgba(235, 192, 200, 1) 36%,
    rgba(148, 187, 233, 1) 93%
  );
  }
  .header-wrapper {
 
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: center;
    .container-wrap-left {
     
      width: 100%;
     
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  width: 99.9%;
  top: 0;
  background: linear-gradient(
    103deg,
    rgba(237, 197, 180, 1) 4%,
    rgba(235, 192, 200, 1) 36%,
    rgba(148, 187, 233, 1) 93%
  );
`;

export const NavMenuLogo = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: black;
  letter-spacing: 0.1em;
`;

export const NavMenuRight = styled.div`
  a {
    color: black;
    font-size: 14px;
    line-height: 30px;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const SocialMedia = styled.div`
  text-align: center;
  margin-top: 50px;
  a {
    color: white;
    font-size: 20px;
    margin: 20px 10px;
    box-shadow: 0 4px 8px rgba(94, 203, 233, 0.2);
    border-radius: 20px;
    &:hover {
      color: black;
      background-color: white;
    }
  }
`;

export const ContainerImg = styled.div`
  width: max-content;
  top: 50px;
  img {
    margin-left: 50%;
    border-radius: 50%;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  top: 15%;
  padding: 3rem;
`;

export const TopContent = styled.div`
  h1 {
    padding: 40px;
    text-align: center;
    color: hsl(0, 0%, 28%);
    font-size: 50px;
    letter-spacing: 7px;
    cursor: pointer;
    text-transform: uppercase;
    background: linear-gradient(
      to right,
      hsl(0, 0%, 30%) 0,
      hsl(0, 0%, 100%) 10%,
      hsl(0, 0%, 30%) 20%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    @keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 600px;
      }
      100% {
        background-position: 600px;
      }
    }
  }
  p {
    font-size: 24px;
    color: black;
    font-weight: 400;
    margin-bottom: 60px;
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(16.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 10px 30px;
    font-size: 18px;
    font-weight: 100;
    text-decoration: none;
    &:hover {
      transform: translateY(-5px);
      background-color: #e0e0e0;
      color: black;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;

export const BottomContent = styled.div`
  p {
    color: black;
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    margin-top: 60px;
    text-align: center;
  }
`;

export const ProjectsSection = styled.section`
  padding: 3rem;
  .title {
    h2 {
      font-size: 36px;
      font-weight: 300;
    }
    .line {
      width: 100px;
      height: 3px;
      background-color: #94bbe9;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  background-color: ${(props) =>
    props.active ? "rgba(31, 38, 135, 0.37)" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0bb9d;
    color: #fff;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgb(238, 174, 202);
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.div`
  flex: 1;
  height: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    img {
      border-radius: 7px;
    }
  }

  img {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #7099c2;
  letter-spacing: 0.1em;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 1rem;
  color: #f0bb9d;
`;

export const CardTeam = styled.p`
  font-size: 14px;
  color: #666;
  font-style: italic;
`;

export const FooterSection = styled.footer`
  background: #fec5bb;
  padding: 2rem;
  text-align: center;
  font-size: 30px;
  color: #7099c2;
`;

export const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SubscribeInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30%;
`;

export const SubscribeButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #7099c2;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
