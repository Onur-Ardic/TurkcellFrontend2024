import { StyledButton } from "./Styled";

const Button = ({ children, ...props }) => {
  

  return (
    <>
        <StyledButton {...props}>{children}</StyledButton>
    </>
  )
}

export default Button

