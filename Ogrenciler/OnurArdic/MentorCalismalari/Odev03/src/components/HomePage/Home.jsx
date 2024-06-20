import { useState } from 'react'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Sidebar from './RightSidebar/Sidebar'

const Home = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}
      >
        Toggle Sidebar
      </button>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: isSidebarVisible ? '25% 50% 23%' : '25% 75%',
          gap: '0.4rem',
          transition: 'grid-template-columns 0.3s ease',
          height: '100vh',
        }}
      >
        <Navbar />
        <Main />
        {isSidebarVisible && <Sidebar />}
      </section>
    </>
  )
}

export default Home
