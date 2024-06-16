export const Input = ({ id, onChange, value, type }) => {
  return (
    <>
    <input
      id={id}
      type={type}
      onChange={onChange}
      value={value}
    />
     </>
  );
};
export default Input