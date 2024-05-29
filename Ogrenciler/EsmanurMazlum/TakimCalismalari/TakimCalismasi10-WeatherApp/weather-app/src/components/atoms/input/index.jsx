import './style.css'

function Input({ text, onChange, value }) {
  return (
    <>
      <input className="input" onInput={onChange} value={value} placeholder={text} />
    </>
  )
}

export default Input
