import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Productdetail = () => {
  const { id } = useParams();
  const { products } = useSelector((store) => store.product);
  const product = products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',  }}>
          <div>
               <h1 style={{ textAlign: 'center' }}>Ürün Detayları</h1>
          </div>
          <div className="dropdown">
            <button style={{background:'#003459', color:'white' , borderRadius:'20px'}} onClick={() => navigate("/productlist")}>Tüm Ürünler</button>
          </div>
      </div>
        
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px 50px',gap: '50px' }}>
          <div style={{ marginBottom: '20px' , flex: 1}}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%'}} />
          </div>
          <div style={{ flex: 2, padding: '20px' }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>{product.price} USD</h4>
          </div>
      </div>
      
    </div>
  );
};

export default Productdetail;
