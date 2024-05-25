import PropTypes from 'prop-types'
import { useState } from 'react'

const Deneme = (
    {
        isim = "İsim Belirtilmedi",
        yas = "Yaş Belirtilmedi"
    }) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>Deneme</div>
            <div>{isim}</div>
            <div>{yas}</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Artır</button>
        </>
    )
}

Deneme.propTypes = {
    isim: PropTypes.string.isRequired,
    yas: PropTypes.string
}

export default Deneme