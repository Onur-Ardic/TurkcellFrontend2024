import './App.css'
import ListItem from './components/ListItem'

function App() {

  const students =["Varol","Necati","Rumeysanur","Egemen"]

  return (
    <>
      {students.map((student)=><ListItem student={student}/>)}
      
    </>
  )
}

export default App
