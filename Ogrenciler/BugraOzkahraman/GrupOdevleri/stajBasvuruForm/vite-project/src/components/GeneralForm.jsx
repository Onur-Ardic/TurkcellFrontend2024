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
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
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
          id="name"
          placeholder="Adınızı giriniz"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="inputDiv">
        <label>Soyisim</label>
        <input
          type="text"
          value={values.lastName}
          onChange={handleChange}
          id="lastName"
          placeholder="Soyadınızı giriniz"
          className={errors.lastName ? "input-error" : ""}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı giriniz"
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şehir</label>
        <input
          type="text"
          value={values.city}
          onChange={handleChange}
          id="city"
          placeholder="Lütfen şehir giriniz"
          className={errors.city ? "input-error" : ""}
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div className="inputDiv">
        <label>Okul</label>
        <input
          type="text"
          value={values.school}
          onChange={handleChange}
          id="school"
          placeholder="Lütfen okul giriniz"
          className={errors.school ? "input-error" : ""}
        />
        {errors.school && <p className="error">{errors.school}</p>}
      </div>
      <div className="inputDiv">
        <label>Gün</label>
        <input
          type="number"
          value={values.internShipDay}
          onChange={handleChange}
          id="internShipDay"
          placeholder="Lütfen gün giriniz"
          className={errors.internShipDay ? "input-error" : ""}
        />
        {errors.internShipDay && (
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
          id="mandatory"
          placeholder="Lütfen birini seçiniz"
          className={errors.mandatory ? "input-error" : ""}>
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
