import { useState, useEffect } from 'react';
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SideBar } from './components/organisms/SideBar/SideBar';
import Slider from './components/organisms/Slider/Slider'

function App() {
  
  const [data, setData] = useState();
  async function getData() {
    await fetch(`https://api.github.com/users/seymabyzt`)
      .then((data) => data.json())
      .then((response) => setData(response))
      .catch((e) => alert(e.message));
  }
  
  
  useEffect(() => {
    getData(data)
  }, []);

  return (
    <>
    <Navbar/>
  <section className='home'>
    <div className="container">
    <div className="jumbotron row p-3 p-md-5 text-white rounded">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Şeyma Bayezit</h1>
          <p class="lead my-3"> About ME Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
        <div className='col-md-4'>
          <img src="https://avatars.githubusercontent.com/u/163021404?v=4" alt="" />
        </div>
      </div>
      <div className='sideBar'>
      <SideBar/>
      </div>
    </div>

  </section>
  <section className='sliderBar'>
  <Slider></Slider>
  </section>

    </>
  )
}

export default App
