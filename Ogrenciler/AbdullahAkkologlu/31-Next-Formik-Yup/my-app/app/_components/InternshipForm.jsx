"use client";
import { useFormik } from "formik";
import { basicSchema } from "../_schema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const InternshipForm = () => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      city: "",
      school: "",
      internshipType: "zorunlu",
      duration: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <div className="inputDiv">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="name"
            placeholder="İsim giriniz"
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            id="surname"
            placeholder="Soyisim giriniz"
            className={errors.surname && touched.surname ? "input-error" : ""}
          />
          {errors.surname && touched.surname && (
            <p className="error">{errors.surname}</p>
          )}
        </div>
      </div>

      <div className="row">
        <div className="inputDiv">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            id="age"
            placeholder="Yaş giriniz"
            className={errors.age && touched.age ? "input-error" : ""}
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="inputDiv">
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            id="city"
            placeholder="Şehir giriniz"
            className={errors.city && touched.city ? "input-error" : ""}
          />
          {errors.city && touched.city && (
            <p className="error">{errors.city}</p>
          )}
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="inputDiv">
          <label htmlFor="school">School</label>
          <input
            type="text"
            value={values.school}
            onChange={handleChange}
            onBlur={handleBlur}
            id="school"
            placeholder="Okul giriniz"
            className={errors.school && touched.school ? "input-error" : ""}
          />
          {errors.school && touched.school && (
            <p className="error">{errors.school}</p>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            value={values.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            id="duration"
            placeholder="Staj süresi giriniz"
            className={errors.duration && touched.duration ? "input-error" : ""}
          />
          {errors.duration && touched.duration && (
            <p className="error">{errors.duration}</p>
          )}
        </div>
      </div>

      <div className="radioDiv">
        <label htmlFor="internshipType">Zorunlu</label>
        <input
          type="radio"
          value="zorunlu"
          onChange={() => setFieldValue("internshipType", "zorunlu")}
          onBlur={handleBlur}
          id="internshipType"
          name="internshipType"
          checked={values.internshipType === "zorunlu"}
          className={
            errors.internshipType && touched.internshipType ? "input-error" : ""
          }
        />
        <label htmlFor="internshipType">Gönüllü</label>
        <input
          type="radio"
          value="gonullu"
          onChange={() => setFieldValue("internshipType", "gonullu")}
          onBlur={handleBlur}
          id="internshipType"
          name="internshipType"
          checked={values.internshipType === "gonullu"}
          className={
            errors.internshipType && touched.internshipType ? "input-error" : ""
          }
        />
        {errors.internshipType && touched.internshipType && (
          <p className="error">{errors.internshipType}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit" className="submitButton">
        Kaydet
      </button>
    </form>
  );
};

export default InternshipForm;
