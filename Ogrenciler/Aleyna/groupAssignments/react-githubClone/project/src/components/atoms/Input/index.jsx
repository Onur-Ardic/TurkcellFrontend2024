import { CustomInput } from "../../common/CustomElements/styled";

const Input = ({ placeholder, onChange, type, value }) => {
  return (
    <CustomInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
