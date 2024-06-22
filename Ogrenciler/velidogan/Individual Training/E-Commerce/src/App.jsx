import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect } from 'react'

function App() {

  const {products,drawer,totalAmount} = useSelector(store => store.basket);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket())
  },[])

  return (
    <>    
      <PageContainer>
        <Header />
        <RouterConfig />       
        <Loading />
        <Drawer width="500px" anchor='right' onClose={()=> dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>                
                  <div className='flex-row' style={{padding:"20px"}}>
                    <img style={{marginRight:"5px"}} src={product.image} width={50} height={50} alt="" />
                    <p style={{width:"320px",marginRight:"5px"}}>{product.title}({product.count})</p>
                    <p style={{fontWeight:"bold",marginRight:"10px",width:"60px"}}>{product.price} TL</p>
                    <button style={{padding:"5px",borderRadius:"5px",backgroundColor:"rgba(185,76,76)",border:"none",color:"#fff", width:"40px"}}>Sil</button>
                  </div>
                 
                </div>
              )
            })
          }
          <div>
            Toplam Tutar : {totalAmount}
          </div>
        </Drawer>
      </PageContainer>    
    </>
  )
}

export default App
