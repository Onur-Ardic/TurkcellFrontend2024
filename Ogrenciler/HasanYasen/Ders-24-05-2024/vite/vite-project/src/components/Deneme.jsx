import PropTypes from "prop-types"
import { useState } from "react"

function Deneme({ name = "İsim belirtilmedi", surname = "Soyisim belirtilmedi" }) {

    const [number, setNumber] = useState(0)
    return (
        <>
            <div>{name}</div>
            <div>{surname}</div>
            <div>{number}</div>
            <button onClick={() => setNumber(number + 1)}>Increase number</button>
        </>
    )
}

Deneme.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
}

export default Deneme