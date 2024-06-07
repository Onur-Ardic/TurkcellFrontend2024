import { useEffect, useRef, useState } from 'react';
import { getUsersApi, getUserApi } from './Api';
import './App.css'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import Errors from './components/Errors'

function App() {

  const input = useRef();
  const [users, setUsers] = useState();
  const [target, setTarget] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setTarget(e.target.value);
  }

  const getUsers = async (target) => {
    try {
      const usersData = await getUsersApi(target);
      setUsers(usersData);
      setTarget("");
    } catch (error) {
      setUsers("");
      setError(true);
    }
  }

  useEffect(() => {
    input.current.focus();
    if (target) { getUsers(target); }
  }, [])
  return (
    <>
      <SearchBar target={target} onChange={onChange} getUsers={getUsers} input={input} />
      {users ? <UserList users={users} setError={setError} error={error}/> : (error ? <Errors error={error} /> : <div className='alert alert-info'><h2 className='text-center p-3'>Arama Yapınız</h2></div>)}
      {users?.items?.length < 1 ? <div className='alert alert-warning'><h2 className='text-center p-3'>Kullanıcı Bulunamadı</h2></div>: ""}
    </>
  )
}

export default App


