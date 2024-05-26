import PropTypes from 'prop-types'
import {useState} from 'react'

const Deneme = ({
    isim = "İsim bilgisi girilmedi",
    yas = "Yaş bilgisi girilmedi"
}) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{isim}</div>
            <div>{yas}</div>
        <div>{count}</div>
        <button onClick={()=> setCount(count + 1)}>Artır</button>
        </>
    )
}
Deneme.PropTypes = {
    isim: PropTypes.string.isRequired,
    yas: PropTypes.string
}
export default Deneme;
