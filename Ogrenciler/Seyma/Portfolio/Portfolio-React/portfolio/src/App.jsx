import { useState, useEffect } from 'react';
import './App.css'
import { Navbar } from './components/organisms/Navbar/Navbar'
import {SideBar} from './components/organisms/SideBar/SideBar'
// import Slider from './components/organisms/Slider/Slider'

function App() {
  
  const [data, setData] = useState();
  async function getData() {
    await fetch(`https://api.github.com/users/seymabyzt`)
      .then((data) => data.json())
      .then((response) => setData(response))
      .catch((e) => alert(e.message));
  }
  useEffect(() => {
    getData()
  }, []);

  return (
    <>
  <section className='home'>
    <div className="container">
    <Navbar/>
    <div ><img className='mt-3 rounded-5 w-25 mx-5' src="https://r.resimlink.com/h0f4k3H.jpeg" alt="" /></div>
    <div className="row p-3 mt-2 p-md-5 text-white rounded">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Şeyma Bayezit</h1>
          <p class="lead my-3"> Hi, welcome to my page. I am a Front-end Developer program student at Turkcell Future Writers Bootcamp. During the bootcamp, I learn basic web development languages ​​such as HTML, CSS and JavaScript.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
       <div><img src="" alt="" /></div>
      </div>
    </div>
    <div className='sideBar'>
      </div>
      <SideBar className='sideBarContent' data= {data}/> 
  </section>
  {/* <section className='sliderBar'>
  <Slider></Slider>
  </section> */}
    </>
  )
}

export default App
