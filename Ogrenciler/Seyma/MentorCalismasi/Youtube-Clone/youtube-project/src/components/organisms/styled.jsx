import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items:center;
    juustify-content: space-between;
    padding: 0 16px;
    border: 1px solid black
`;

export const DivLogo = styled.div`
    width: 120px;
    height: 56px;
    padding: 18px 14px 18px 16px;
`;

export const ImgLogo = styled.img`
    width: 100%;
`;

export const NavbarLeft =styled.div`
    display: flex;
    flex direction: column;
    align-items: center;
`;

export const ToogleDiv =styled.div`
    width: 40px;
    height: 40px;
    padding: 8px;
    &:hover {
        background: #f2f2f2;
        border-radius: 50%;
  }
`
export const ToggleMenu =styled.img`
    width: 100%;
`
export const NavbarMiddle =styled.div`
    width: 100%;
`
export const NavbarRight =styled.div`
    width: 100%;
`
