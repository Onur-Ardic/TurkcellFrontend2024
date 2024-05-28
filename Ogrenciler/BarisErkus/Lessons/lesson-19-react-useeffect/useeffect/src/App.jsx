import { useEffect } from 'react'
import './App.css'
import ListItem from './components/ListItem'

function App() {
  // const isLoaded = useBoolean(true)
  useEffect(() => {
    console.log('Component did mount')
    return () => {
      console.log('Component will unmount')
    }
  })
  const students = ['Varol', 'Barış', 'Ahmet', 'Mehmet']
  return (
    <>
      {students.map((student, index) => {
        return <ListItem key={index} student={student} />
      })}
      {/* <button onClick={() => isLoaded.setTrue()}>{isLoaded}</button> */}
    </>
  )
}

export default App
