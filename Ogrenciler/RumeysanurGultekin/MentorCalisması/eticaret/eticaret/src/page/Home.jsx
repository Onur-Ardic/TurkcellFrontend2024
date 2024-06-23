import React from 'react'
import ProductList from '../components/ProductList.jsx'
import ProductEight from '../components/Product8.jsx'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Headertext = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    color: #003459; 
    gap: 50px;
    `

const Home = () => {
  
  
  const navigate = useNavigate();

  return (
    <div>
        <Headertext style={{borderBottom:'1px solid grey', marginBottom:'50px'}}>
            <div style={{ margin: '50px auto'}}>
                <h1>Online Alışverişin Keyfini Çıkartın</h1>
                <h4>Birçok ürünle sizlerleyiz</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quas fuga corporis fugit assumenda similique odit unde optio iste tempore provident veniam itaque placeat fugiat beatae! Esse molestiae eos ipsa.</p>
                <div style={{display:'flex', gap:'20px', marginTop:'20px',justifyContent:'center'}}>
                    {/* <button style={{border:'1px solid #003459', borderRadius:'25px', backgroundColor:'#F7DBA7', color:'#003459' }}>View intro</button> */}
                    <button style={{background:'#003459', color:'white' , borderRadius:'25px', marginTop:'20px', marginBottom:'70px'}} onClick={() => navigate ("/productlist")}>Ürünleri Keşfet</button>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <img src='https://cms.nvctrading.com/app/uploads/2017/12/online-shopping.jpg' style={{width:'85%'}} />
            </div>
        </Headertext>
      <ProductEight />
    </div>
  )
}

export default Home