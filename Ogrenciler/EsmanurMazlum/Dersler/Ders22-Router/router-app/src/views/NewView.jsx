import { Outlet } from "react-router-dom"

function NewView() {
  return (
    <>
        <div>Haberler</div>
        <Outlet/>
    </>
  )
}

export default NewView