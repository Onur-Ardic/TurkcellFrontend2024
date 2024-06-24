import { Toaster } from 'react-hot-toast'
import './App.css'
import Form from './components/Form'
import Sign from './components/Sign'
import TodoListItem from './components/TodoListItem'
import Navbar from './components/Navbar'
import LoginArea from './components/Login'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <Navbar />
      {user ? (
        <div className="container mx-auto">
          <Home />
        </div>
      ) : (
        <h3 className="mx-auto bg-blue-500 text-center text-white p-3">Lütfen giriş yapın</h3>
      )}
      <Routes>
        <Route path="/login" element={<LoginArea />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
