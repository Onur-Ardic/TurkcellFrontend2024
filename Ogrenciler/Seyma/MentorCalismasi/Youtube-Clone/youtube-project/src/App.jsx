import './App.css'
import SideBar from './components/organisms/SideBar';
import Navbar from './components/organisms/Navbar';
import { useTheme } from './context/ThemeContext';
import Router from './routes/Router';


function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`app`} data-theme={theme} >
      <Navbar></Navbar>
    <SideBar></SideBar>
    <Router/>
    </div>
    
    </>
  )
}

export default App
