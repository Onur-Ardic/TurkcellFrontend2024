"use client"

import { useEffect } from "react"

export default function Error({error,reset}){
    
    useEffect(() => {
        
        console.error(error)
      }, [error])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-danger">Hata Oluştu</h1>
                        <h2 className="text-warning">{error.message}</h2>
                        <button className="btn btn-danger" onClick={reset}>Tekrar Dene</button>
                    </div>
                </div>
            </div>
        </>
    )
}