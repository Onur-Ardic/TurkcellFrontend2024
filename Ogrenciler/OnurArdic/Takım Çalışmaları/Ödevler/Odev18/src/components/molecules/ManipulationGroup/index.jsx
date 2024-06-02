import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const ManipulationGroup = ({ buttons, placeholder, onChange, type, value }) => {
  return (
    <div>
      <Input type={type} placeholder={placeholder} onChange={onChange} value={value} />
      {buttons.map((button, index) => (
        <Button key={index} text={button.text} onClick={button.onClick} />
      ))}
    </div>
  )
}

export default ManipulationGroup
