import {useTheme} from "./context/ThemeContext"
import Button  from "./components/Button"
import './App.css'

function App() {
const {theme}= useTheme();
  return (
    <>
      <div className={`app ${theme}`}> </div>
      <h1>contect uygulaması</h1>
      <Button/>
    </>
  )
}

export default App
