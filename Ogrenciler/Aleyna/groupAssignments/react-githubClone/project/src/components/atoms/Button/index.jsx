import { CustomButton } from "../../common/CustomElements/styled";

const Button = ({ type, onClick, text, backgroundColor }) => {
  return (
    <CustomButton
      type={type}
      onClick={onClick}
      background-color={backgroundColor}
    >
      {text}
    </CustomButton>
  );
};

export default Button;
