import React from 'react'
import { InputCard } from '../css/InputCss'
function Input({user,setUser,handleUser}) {

    return (
        <>
            <div className="input-group">
                <InputCard type="text" value={user} onChange={(e)=>{setUser(e.target.value)}} className='form-control text-light bg-transparent' placeholder='Search User'/>
                <button onClick={handleUser} className='btn btn-outline-danger'>USER SEARCH</button>
            </div>            
        </>
    )
}

export default Input