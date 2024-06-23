export const Input = ({ id, onChange, value, type, onFocus }) => {

  return (
    <>
    <input
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      onFocus={onFocus}

    />
     </>
  );
};
export default Input