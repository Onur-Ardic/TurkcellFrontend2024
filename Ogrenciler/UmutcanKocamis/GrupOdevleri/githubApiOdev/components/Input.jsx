import { Button, InputUI, InputButtonContainer } from "../src/styled";
import { FaSearch, FaGithubAlt } from "react-icons/fa";

const Input = ({ handleClick, username, handleChange }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <FaGithubAlt size="3rem" />
      <InputButtonContainer>
        <InputUI
          type="text"
          value={username}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Lütfen github adı giriniz"
        />
        <Button onClick={handleClick}>
          <FaSearch color="#83d283" />
        </Button>
      </InputButtonContainer>
    </>
  );
};

export default Input;
