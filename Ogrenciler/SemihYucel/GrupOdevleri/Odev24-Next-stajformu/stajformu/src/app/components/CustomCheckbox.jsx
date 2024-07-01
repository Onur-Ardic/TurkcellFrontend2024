import { useField } from "formik";

function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="checkbox">
      <input {...field} {...props} className={meta.error && meta.touched ? "input-error" : ""} />
      <label>{label}</label>
      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomCheckbox;
