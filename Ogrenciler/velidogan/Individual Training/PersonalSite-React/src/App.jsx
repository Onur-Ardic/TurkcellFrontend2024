import { useEffect, useState } from 'react'
import './App.css'
import Social from "./components/Social"
import Request from "./request/request"
import Form from "./components/Form"
import Logo from "./assets/pp2.jpg"
import Project from './components/Project'

function App() {
  const [socialLink, setSocialLink] = useState([])
  const [projectLink, setProjectLink] = useState([])


  useEffect(()=>{
    fetchData("projects");
    fetchData("socials");
  },[])

  const fetchData = async(data) => {
    const response = await Request.get(`http://localhost:3000/${data}`)
    if(data == "projects"){
      setProjectLink(response)
    }else{
      setSocialLink(response);
    }
  }

  return (
    <>  
      <main className="main">  
        <div className="container">
          <div className="social container">
            <Social  socialLink={socialLink}/>
          </div>
          <div className='main-info'>
            <div className="main-info-left">
                <h1>WE SOLVE</h1>
                <Form />
            </div>
            <div className="main-info-right">
                <div className="image">
                    <img className="logo" src={Logo} alt=""/>
                    <div className="cover"></div>
                </div>
                <article>
                    <p>
                        Merhaba Ben Veli , Tekirdağ Namık Kemal Üniversitesinde Bilgisayar Mühendisliği okuyorum.Aktif olarak Turcell GYGY programında Frontend Development alanında eğitim alıyorum. Şuan da HTML&CSS(Flexbox, Grid, SCSS ve Bootstrap) ve Temel Javascript ile Typescript tamamen bitirdim. İlerleyen süreçte React ve harici kütüphaneler ile alanımdaki eğitimimi tamamlayıp yeni hedeflere yelken açacağım.
                    </p>
                    <div className="contact-info">
                        <div className="phone">
                            <strong>
                                İletişim :
                            </strong>
                            <p>+90 531 925 55 58</p>
                        </div>
                        <div className="address">
                            <strong>
                                Adres :
                            </strong>
                            <address>Bursa / Orhangazi</address>
                        </div>
                    </div>
                </article>
            </div>
          </div>
          <div className="projects container">
            {
              projectLink?.map((project,index)=> <Project key={index} link={project.link} img={project.image}/>)
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
