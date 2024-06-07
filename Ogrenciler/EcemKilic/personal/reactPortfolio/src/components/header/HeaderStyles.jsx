import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #242424;
  z-index: 10;
  padding: 10px 0;

  @media (max-width: 768px) {
    padding-top: 10px;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const HeaderContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 90%;
  padding: 20px 10px;
  margin: -10px auto;
`;

export const HeaderList = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
  overflow: hidden;

  @media (max-width: 48em) {
    display: none;
  }
`;

export const HeaderItem = styled.li`
  float: left;

  @media (max-width: 48em) {
    float: none;
  }
`;

export const HeaderLink = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #D5CEA3;

  &:hover {
    color: white;
  }
`;

export const Menu = styled.div`
  font-family: 'Google Sans Regular';
  clear: both;
  transition: max-height 0.2s ease-out;

  @media (max-width: 48em) {
    max-height: none;
    display: block;
  }
`;

export const Icon = styled.div`
  padding: 5px;
  transition: all 0.2s ease-in-out;
  color: white;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 2px 10px #D5CEA3;
    background-color: #3C2A21;
  }
`;