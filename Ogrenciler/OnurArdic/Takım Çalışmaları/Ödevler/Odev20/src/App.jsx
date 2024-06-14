import { Toaster } from 'react-hot-toast'
import './App.css'
import Form from './components/Form'
import Sign from './components/Sign'
import TodoListItem from './components/TodoListItem'
import Navbar from './components/Navbar'
import LoginArea from './components/Login'
import { useSelector } from 'react-redux'

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <Navbar />
      <Sign />
      <LoginArea />
      {user ? (
        <div className="container mx-auto">
          <Form />
          <TodoListItem />
        </div>
      ) : (
        <h3 className="mx-auto bg-blue-500 text-center text-white p-3">Lütfen giriş yapın</h3>
      )}

      <Toaster />
    </>
  )
}

export default App
