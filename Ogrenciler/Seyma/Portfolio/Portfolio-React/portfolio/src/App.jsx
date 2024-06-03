import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Button from './components/atoms/buttons/Button'
function App() {
  

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
    <div className='sideBarContent'>
    <Button text="Add" type="submit" />
    </div>
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
