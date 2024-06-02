import ReactDOM from 'react-dom'

const index = ({target, text}) => {
  return ReactDOM.createPortal(
    <div>Selam ben portal, hedefim {text}</div>, target
  )
}

export default index