import { SizeOption } from "./styles";

const SizeButton = ({ children, ...props }) => {
  return <SizeOption {...props}>{children}</SizeOption>;
};

export default SizeButton;
