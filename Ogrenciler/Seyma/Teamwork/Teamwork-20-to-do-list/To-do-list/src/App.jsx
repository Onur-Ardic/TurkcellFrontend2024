
import { useEffect, useState } from 'react';
import './App.css'
import { ToDoForm } from './components/organisms/ToDoForm/ToDoForm'
import { get } from './service/Api'
import { Cards } from './components/molecules/Cards/Cards';
import { Navbar } from './components/organisms/Navbar/Navbar';

function App() {
const [toDo, setToDo] = useState([]);
 const getToDo = async () => {
  const allToDo = await get()
  setToDo(allToDo)
 }
 useEffect(()=> {
  getToDo()
 }, [])
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-lg-3'><ToDoForm /></div>
    <div className='col-lg-9'>
    {toDo.map((toDo, index)=> (
      <Cards toDo={toDo} key={index}/>
     ))}
    </div>
    </div>
    
    </div>
    </>
  )
}

export default App
