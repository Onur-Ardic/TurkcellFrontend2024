import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
export const Input = styled.input`
  border-radius: 1rem;
  background-color: #474f7a;
  border: none;
  outline: none;
  color: white;
  &::placeholder {
    color: white;
  }
`;
export const CustomForm = styled.form`
  background-color: #474f7a;
  border-radius: 2rem;
  width: max-content;
  padding: 0.5rem 0.25rem 0.5rem 1.5rem;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  background-color: #${(props) => props.bgcolor};
  padding: 0.75rem 1rem;
  border-radius: 2rem;
  outline: none;
  border: none;
  margin-right: 0.25rem;
  color: #${(props) => props.color};
  width: ${(props) => props.width};
  cursor: pointer;
  align-self: end;
`;
export const ProfileContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 15rem;
`;

export const H2 = styled.h2`
  margin: 0.5rem 0 0 0;
`;
export const H4 = styled.h4`
  margin: 0.5rem 0 0 0;
`;
export const P = styled.p`
  margin: 0;
`;
export const Description = styled(P)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 400px;
`;
export const DetailsCard = styled.div`
  align-self: start;
`;
export const A = styled.a`
  text-decoration: none;
  color: black;
`;
export const FollowSpanText = styled.span`
  font-size: 14px;
`;
export const FollowSpan = styled(A)`
  font-weight: 600;
`;
export const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;
export const RepoUl = styled(Ul)`
  display: flex;
  gap: 2rem;
`;
export const Div = styled.div`
  display: flex;
`;
export const DivGap = styled(Div)`
  gap: 12rem;
`;
export const DivBetween = styled(Div)`
  justify-content: space-between;
`;
export const ReposDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 20px;
  width: 60%;
  margin-top: 2rem;
`;
export const RepoCardDiv = styled.div`
  background-color: #474f7a;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: 10px 10px 10px #d4adfc;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`;
export const SpinnerDiv = styled(Div)`
  justify-content: center;
`;
