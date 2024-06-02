import React, { useState } from 'react'
import User from './User'
import { getUserApi } from '../Api';
import UserPortal from './UserPortal';
import { createPortal } from 'react-dom';

const UserList = ({ users }) => {

  const [userDetail, setUserDetail] = useState();
  const [portal, setPortal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePortal = async (id, e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setPortal(true);
      const userDetails = await getUserApi(id);
      setUserDetail(userDetails);
      console.log(userDetail)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const closePortal = () => {
    setPortal(false);
  }

  return (
    <>
      <div className='container'>
        <div className='position-relative'>
          {!loading &&
            <>
              {users?.items?.map((user) => <User key={user.id} user={user} handlePortal={handlePortal} />)}
              {portal && createPortal(<UserPortal userDetail={userDetail} closePortal={closePortal} />, document.body)}

            </>}
        </div>
      </div>
    </>
  )
}

export default UserList