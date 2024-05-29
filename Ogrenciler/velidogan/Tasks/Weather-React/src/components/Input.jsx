import React from 'react'

function Input({city,setCity,handleCity}) {

    
    return (
        <>
            <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
            <button onClick={handleCity}>Hava Durumu</button>
        </>
    )
}

export default Input