import { Outlet } from 'react-router-dom'

const NewView = () => {
  return (
    <div>
      <h2>Haberler</h2>
      <Outlet />
    </div>
  )
}

export default NewView
