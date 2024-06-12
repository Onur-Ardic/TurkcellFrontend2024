import './App.css'
import Button from './component/Button'
import { useTheme } from './context/ThemeContext'

function App() {
  const {theme} = useTheme();
  return (
    <>
    <div className={`app ${theme}`}>
        <h1 style={{margin:"0"}}>Context Uygulama</h1>
        <Button />
      </div>
    </>
  )
}

export default App
