
const Button = ({ text, onClick, type}) => {
  return (
    <>
    <button
        onClick={onClick}
        type={type}>{text}</button>
    </>
  )
}

export default Button