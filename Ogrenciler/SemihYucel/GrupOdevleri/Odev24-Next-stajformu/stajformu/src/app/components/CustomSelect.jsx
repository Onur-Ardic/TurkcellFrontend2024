import { useField } from "formik";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="inputDiv">
      <label>{label}</label>
      <select {...field} {...props} className={meta.error && meta.touched ? "input-error" : ""} />
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomSelect;
