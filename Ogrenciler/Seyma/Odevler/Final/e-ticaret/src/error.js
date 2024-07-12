'use client'

export default function Error ({error, reset}){
    return(
        <>
        An error occurred : {error.message}
        <button onClick={() => reset()}> Yeniden Dene</button>
        </>
    )
}