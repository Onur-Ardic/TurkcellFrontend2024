import "./style.css"


function Input({text, onChange, value}) {
  return (
    <>
        <input className='input' onInput={onChange} value={value} name={text}/>
    </>
  )
}

export default Input