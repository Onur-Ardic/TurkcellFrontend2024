import Input from '../../atoms/input'
import Button from '../../atoms/button'

function InputGroup({ text, onChange, value, btnText, onClick }) {
  return (
    <>
      <div className="input-group">
        <Input text={text} onChange={onChange} value={value} />
        <Button text={btnText} onClick={onClick} />
      </div>
    </>
  )
}

export default InputGroup
