import { Toaster } from 'react-hot-toast'
import './App.css'
import Form from './components/Form'
import Sign from './components/Sign'
import TodoListItem from './components/TodoListItem'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Sign />
      <div className="container mx-auto">
        <Form />
        <TodoListItem />
      </div>

      <Toaster />
    </>
  )
}

export default App
