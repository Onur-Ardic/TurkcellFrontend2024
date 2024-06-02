import React from 'react'

const UserCard = ({ showUser }) => {
  return (
    <div className='col-4 p-4 text-center border border-dark-subtle rounded rounded-75'>
        {showUser.map((user, index) => (
        <div key={index}>
          <img className='img-fluid mb-3'
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            style={{ width: "300px", borderRadius: "50%" }}
          />
          <p>{user.name}</p>
           <p>{user.login}</p>
           <p> {user.bio}</p>
           <p>
           <a className='btn btn-secondary w-100' href={user.html_url} target="_blank">
             Profile Git
            </a>
          </p>
           <div className='d-flex justify-content-evenly'>
          <p> {user.followers} Takipçi</p>
          <p> {user.following} Takip Edilen</p>
          </div>
           <p>{user.location}</p>
           <p>{user.blog}</p>
           <p>{user.email? user.email:"Email bulunamadı"}</p>


        </div>
      ))}
    </div>
  )
}

export default UserCard;