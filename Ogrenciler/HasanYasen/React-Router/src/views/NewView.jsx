import { Outlet } from "react-router-dom"

function NewView() {
    return (
        <>
            <h2>Breaking News...</h2>
            <div>NewView</div>
            <Outlet />
        </>
    )
}

export default NewView