'use client'

import { useEffect } from 'react'
import './(Sites)/styles/error.scss'
import toast from 'react-hot-toast'

export default function Error({ error, reset }) {
  useEffect(() => {
    toast.error(error)
  }, [error])

  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
