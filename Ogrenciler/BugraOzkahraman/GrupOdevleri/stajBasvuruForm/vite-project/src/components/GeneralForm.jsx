import { useFormik } from "formik";
import { internSchema } from "../shema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      age: "",
      name: "",
      lastName: "",
      city: "",
      school: "",
      internShipDay: "",
      mandatory: "",
    },
    validationSchema: internSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>İsim</label>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          placeholder="Adınızı giriniz"
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="inputDiv">
        <label>Soyisim</label>
        <input
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          id="lastName"
          placeholder="Soyadınızı giriniz"
          className={errors.lastName && touched.lastName ? "input-error" : ""}
        />
        {errors.lastName && touched.lastName && (
          <p className="error">{errors.lastName}</p>
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
          placeholder="Lütfen şehir giriniz"
          className={errors.city && touched.city ? "input-error" : ""}
        />
        {errors.city && touched.city && <p className="error">{errors.city}</p>}
      </div>
      <div className="inputDiv">
        <label>Okul</label>
        <input
          type="text"
          value={values.school}
          onChange={handleChange}
          onBlur={handleBlur}
          id="school"
          placeholder="Lütfen okul giriniz"
          className={errors.school && touched.school ? "input-error" : ""}
        />
        {errors.school && touched.school && (
          <p className="error">{errors.school}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Gün</label>
        <input
          type="number"
          value={values.internShipDay}
          onChange={handleChange}
          onBlur={handleBlur}
          id="internShipDay"
          placeholder="Lütfen gün giriniz"
          className={
            errors.internShipDay && touched.internShipDay ? "input-error" : ""
          }
        />
        {errors.internShipDay && touched.internShipDay && (
          <p className="error">{errors.internShipDay}</p>
        )}
      </div>
      <div className="inputDiv">
        <label>Zorunlu mu ?</label>
        <select
          name="mandatory"
          type="number"
          value={values.mandatory}
          onChange={handleChange}
          onBlur={handleBlur}
          id="mandatory"
          placeholder="Lütfen birini seçiniz"
          className={errors.mandatory ? "input-error" : ""}
        >
          <option value="Boş"></option>
          <option value="Evet">Evet</option>
          <option value="Hayır">Hayır</option>
        </select>
        {/* <select
          type="number"
          value={values.mandatory}
          onChange={handleChange}
          id="mandatory"
          placeholder="Lütfen birini seçiniz"
          className={errors.mandatory ? "input-error" : ""}
          
        /> */}
        {errors.mandatory && <p className="error">{errors.mandatory}</p>}
      </div>

      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
    </form>
  );
}

export default GeneralForm;
