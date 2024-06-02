import { useState, useEffect } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [users, setUsers] = useState([]);
  const [target, setTarget] = useState("");
  
  const onChange = (e) => {
    setTarget(e.target.value);
  }

  const getUsers = async () => {
    await fetch(`https://api.github.com/search/users?q=esmanurrr`)
      .then(res => res.json()).then((data) => {setUsers(data)}).catch(err => console.log(err));
  }

  // useEffect(() => {
  //   getUsers(target);
  // }, [target])


  return (
    <>
      <SearchBar target={target} onChange={onChange} getUsers={getUsers}/>
    </>
  )
}

export default App
