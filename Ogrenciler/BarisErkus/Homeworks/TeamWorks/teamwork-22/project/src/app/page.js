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

const Home = () => {
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
      city: "",
      isRequired: "",
      day: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Name</label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Adınızı giriniz"
            className={errors.name && touched.name ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Surname</label>
          <input
            type="text"
            value={values.surname}
            onChange={handleChange}
            id="surname"
            placeholder="Soyadınızı giriniz"
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
            placeholder="Yaşınızı giriniz"
            className={errors.age && touched.age ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label>City</label>
          <input
            type="text"
            value={values.city}
            onChange={handleChange}
            id="city"
            placeholder="Şehrinizi giriniz"
            className={errors.city && touched.city ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.city && touched.city && (
            <p className="error">{errors.city}</p>
          )}
        </div>
        <div className="inputDiv">
          <label>Required</label>
          <select
            value={values.isRequired}
            onChange={handleChange}
            id="isRequired"
            className={
              errors.isRequired && touched.isRequired ? "input-error" : ""
            }
            onBlur={handleBlur}
          >
            <option>Evet</option>
            <option>Hayır</option>
          </select>
          {errors.isRequired && touched.isRequired && (
            <p className="error">{errors.isRequired}</p>
          )}
        </div>

        <div className="inputDiv">
          <label>Day</label>
          <input
            type="number"
            value={values.day}
            onChange={handleChange}
            id="day"
            placeholder="Kaç gün yapacaksınız?"
            className={errors.day && touched.day ? "input-error" : ""}
            onBlur={handleBlur}
          />
          {errors.day && touched.day && <p className="error">{errors.day}</p>}
        </div>
        <button disabled={isSubmitting} type="submit" className="button">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Home;
