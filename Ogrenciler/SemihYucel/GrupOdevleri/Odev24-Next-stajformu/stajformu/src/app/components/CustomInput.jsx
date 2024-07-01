import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="inputDiv">
      <label>{label}</label>
      <input {...field} {...props} className={meta.error && meta.touched ? "input-error" : ""} />
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomInput;
