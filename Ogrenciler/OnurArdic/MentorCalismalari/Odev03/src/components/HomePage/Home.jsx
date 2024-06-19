import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Sidebar from './RightSidebar/Sidebar'

const Home = () => {
  return (
    <>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '25% 50% 23%',
          gap: '1rem',
        }}
      >
        <Navbar />
        <Main></Main>
        <Sidebar></Sidebar>
      </section>
    </>
  )
}

export default Home
