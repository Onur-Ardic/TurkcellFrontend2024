const Input = ({ value, handleInputChange, handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key == "Enter") handleKeyDown;
        }}
      />
    </div>
  );
};

export default Input;
