import About from '../About/About'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'

const Home = ({ user, repos }) => {
  return (
    <main>
      <Navbar />
      <Hero user={user} />
      <About />
      <Portfolio repos={repos} />
    </main>
  )
}

export default Home
