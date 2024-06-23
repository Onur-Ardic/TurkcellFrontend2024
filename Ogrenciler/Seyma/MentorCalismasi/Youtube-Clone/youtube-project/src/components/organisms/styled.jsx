import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: var(--background-color);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const DivLogo = styled.div`
  width: 120px;
  height: 56px;
  padding: 18px 14px 18px 16px;
`;

export const ImgLogo = styled.img`
  width: 100%;
`;

export const NavbarLeft = styled.div`
    display: flex;
    flex direction: column;
    align-items: center;

`;

export const NavbarMiddle = styled.div`
  width: 100%;
  @media (max-width: 480px) {
    display: none;
  }
`;
export const NavbarRight = styled.div`
  align-items: center;
  display: flex;
`;
export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 50%;
  background-color: var(--background-color);
`;
export const HomeIcons = styled.span`
  color: var(--primary-text-color);
  font-weight: 100;
  font-size: 28px;
`;

export const MaterialIcons = styled.span`
  color: var(--primary-text-color);
  font-weight: 100;
`;
export const ListStyle = styled.ul`
    list-style-type: none;
    display: flex;
`;
export const ListStyleLi = styled.li`
  padding: 5px;
  border-radius: 50%;
  background-color: var(--secondary-text-color) !important;
  color: var(--primary-text-color);
  &:hover {
    background-color: var(--foreground-color);
    color: var(--secondary-text-color);
  }
`;
export const StyleLinkBottom = styled.a`
   padding: 0.5rem; 
   border-radius: 10px; 
   font-size: 0.9rem;
   font-weight: 550;
   color: var(--primary-text-color); 
   background-color: var(--foreground-color); 
   margin: 7px; 
   &:hover { 
      background-color: var(--toggle-bg)
   }`;

export const NavbarBottomFlex = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    overflow-x: auto; 
    white-space: nowrap; 
    height: 56px;
    padding-right: 16px;
    -ms-overflow-style: none;  /* IE ve Edge */
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none; 
}
    @media (max-width: 480px) {
      display: none;
  }
`;



