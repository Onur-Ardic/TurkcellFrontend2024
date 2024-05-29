import Input from '../../atoms/input'
import Button from '../../atoms/button'

function InputGroup({text, onChange, value, btnText, onClick}) {
  return (
    <>
      <Input text={text} onChange={onChange} value={value}/>
      <Button text={btnText} onClick={onClick}/>
    </>
  )
}

export default InputGroup