const Button = ({ type, onClick, text }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
