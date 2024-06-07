import { Outlet } from "react-router-dom"

const NewView = () => {
  return (
    <>
    <h2>Haberler</h2>
    <Router/>
    <Outlet/>
    </>
  )
}

export default NewView;