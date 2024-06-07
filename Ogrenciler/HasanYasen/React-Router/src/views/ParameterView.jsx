import { useParams } from "react-router-dom"

function ParameterView() {
    const params = useParams()

    return (
        <>ParameterView - id: {params.id}</>
    )
}

export default ParameterView