

import Router from './routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Router baslık</h1>
      <Router />
      <div>Footer</div>
    </>
  )
}

export default App
