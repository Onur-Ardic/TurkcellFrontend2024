import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Headercontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    background-color: #F7DBA7;
    padding: 15px 100px;
`;

const Headernav = styled.div`
    display: flex;
    flex-direction: row; 
    color: #003459;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

const StyledNavlink = styled(NavLink)`
    text-decoration: none;
    color: #003459;
    padding-left: 50px;
`;

const Header = () => {
    const navigate = useNavigate();
    const [searchProduct, setSearchProduct] = useState("");

    const searchProducts = (e) => {
        e.preventDefault();
        navigate(`/productlist?search=${searchProduct}`);
        setSearchProduct("");
    }

    return (
        <Headercontainer>
            <Headernav>
                <div><h2>ShoppinGo</h2></div>
                <div>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', flexDirection: 'row', fontSize: '17px', color: 'grey' }}>
                        <li>
                            <StyledNavlink to="/">Home</StyledNavlink>
                        </li>
                        <li>
                            <StyledNavlink to="/productlist">Tüm Ürünler</StyledNavlink>
                        </li>
                        <li>
                            <StyledNavlink to="/contact">İletişim</StyledNavlink>
                        </li>
                    </ul>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <form onSubmit={searchProducts} style={{ display: 'flex', gap: '15px' }}>
                        <div>
                            <input 
                                type='text' 
                                placeholder='Ürün ara..' 
                                value={searchProduct} 
                                onChange={(e) => setSearchProduct(e.target.value)} 
                                style={{ backgroundColor: 'white', borderRadius: '20px', padding: '10px 10px', color: 'grey' }}
                            />
                        </div>
                        <div>
                            <button type="submit" style={{ background: '#003459', color: 'white', borderRadius: '20px' }}>Ara</button>
                        </div>
                    </form>
                    <div>
                        <button style={{ background: '#003459', color: 'white', borderRadius: '20px' }} onClick={() => navigate("/login")}>Login</button>
                    </div>
                </div>
            </Headernav>
        </Headercontainer>
    );
}

export default Header;
