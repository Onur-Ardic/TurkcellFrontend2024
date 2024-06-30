"use client";
import { useFormik } from "formik";
import { basicSchema } from "@/schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const ApplyForm = () => {
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
      age: "",
      university: "",
      city: "",
      type: "",
      duration: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Ad</label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Adınızı giriniz.."
            className={errors.name && touched.name ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Soyad</label>
          <input
            type="text"
            value={values.surname}
            onChange={handleChange}
            id="surname"
            placeholder="Soyadınızı giriniz.."
            className={errors.surname && touched.surname ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.surname && touched.surname && (
            <p className="error">{errors.surname}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder="Yaşınızı giriniz.."
            className={errors.age && touched.age ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>Şehir</label>
          <input
            type="text"
            value={values.city}
            onChange={handleChange}
            id="city"
            placeholder="Yaşadığınız şehri giriniz.."
            className={errors.city && touched.city ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.city && touched.city && (
            <p className="error">{errors.city}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Üniversite</label>
          <input
            type="text"
            value={values.university}
            onChange={handleChange}
            id="university"
            placeholder="Üniversitenizi giriniz.."
            className={
              errors.university && touched.university ? "input-error" : ""
            }
            onBlur={handleBlur}
          />
          {errors.university && touched.university && (
            <p className="error">{errors.university}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Staj Süresi</label>
          <input
            type="number"
            value={values.duration}
            onChange={handleChange}
            id="duration"
            placeholder="Staj gün sayınızı giriniz.."
            className={errors.duration && touched.duration ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.duration && touched.duration && (
            <p className="error">{errors.duration}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Staj Türü</label>
          <select
            value={values.Type}
            onChange={handleChange}
            id="type"
            className={errors.type && touched.type ? "input-error" : ""}
            onBlur={handleBlur}
          >
            <option>Zorunlu Staj</option>
            <option>Gönüllü Staj</option>
          </select>
          {errors.type && touched.type && (
            <p className="error">{errors.type}</p>
          )}
        </div>

        <button disabled={isSubmitting} type="submit" className="button">
          Başvur
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
