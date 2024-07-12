import { StyledButton } from "./styles";

const Button = ({ children, theme, className, ...props }) => {
  return (
    <StyledButton
      className={`btn ${className} ${
        theme === "ligth" && "border border-gray border-1 text-black"
      } py-2 px-5 rounded-pill`}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
