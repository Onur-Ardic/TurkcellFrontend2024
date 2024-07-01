import { useFormik } from "formik";
import { internShipSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(values),
  });
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function InternForm() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      age: "",
      city: "",
      type: "",
      length: "",
    },
    validationSchema: internShipSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Ad</label>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          placeholder="Adınızı giriniz"
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="inputDiv">
        <label>Soyad</label>
        <input
          type="text"
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          id="surname"
          placeholder="Soyadınızı giriniz"
          className={errors.surname && touched.surname ? "input-error" : ""}
        />
        {errors.surname && touched.surname && (
          <p className="error">{errors.surname}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          placeholder="Mail adresinizi giriniz"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          placeholder="Yaşınızı giriniz"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şehir</label>
        <input
          type="text"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          id="city"
          placeholder="Şehir yazınız"
          className={errors.city && touched.city ? "input-error" : ""}
        />
        {errors.city && touched.city && <p className="error">{errors.city}</p>}
      </div>
      <div className="inputDiv">
        <label>Staj Türü</label>
        <select
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          id="type"
          className={errors.type && touched.type ? "input-error" : ""}
        >
          <option value="" label="Seçiniz" />
          <option value="Gönüllü" label="Gönüllü" />
          <option value="Zorunlu" label="Zorunlu" />
        </select>
        {errors.type && touched.type && <p className="error">{errors.type}</p>}
      </div>
      <div className="inputDiv">
        <label>Staj Süresi</label>
        <input
          type="number"
          value={values.length}
          onChange={handleChange}
          onBlur={handleBlur}
          id="length"
          placeholder="Staj süresini giriniz"
          className={errors.length && touched.length ? "input-error" : ""}
        />
        {errors.length && touched.length && (
          <p className="error">{errors.length}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to="/portal">
        Portala Git
      </Link>
    </form>
  );
}

export default InternForm;
