import React from 'react'

function Input({city,setCity,handleCity}) {

    
    return (
        <>
            <div className="input-group">
                <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} className='form-control bg-transparent text-light'/>
                <button onClick={handleCity} className='btn btn-outline-danger'>Hava Durumu</button>
            </div>            
        </>
    )
}

export default Input