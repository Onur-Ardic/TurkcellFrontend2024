import './App.css'
import Form from './components/Form'
import TodoListItem from './components/TodoListItem'

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Form />
        <TodoListItem />
      </div>
    </>
  )
}

export default App
