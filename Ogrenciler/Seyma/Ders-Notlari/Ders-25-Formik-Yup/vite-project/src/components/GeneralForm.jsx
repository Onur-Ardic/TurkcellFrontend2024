import { useFormik, Formik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";
import CustomSelect from "./CustomSelect";
import { advancedSchema } from "../schemas";


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
        name:"",
        surName:"",
        email: "",
        age: "",
        city: "",
        school: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  //   console.log(formik);
  return (
<Formik
        initialValues={{ username: "", city: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
    <form onSubmit={handleSubmit}>
      <div>
       <div className="inputDiv">
        <label>Ad</label>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          id="name"
          placeholder="Lütfen Adınızı Giriniz"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="inputDiv">
        <label>Soyad</label>
        <input
          type="text"
          value={values.surName}
          onChange={handleChange}
          id="surName"
          placeholder="Lütfen Soyadınızı Giriniz"
          className={errors.surName ? "input-error" : ""}
        />
        {errors.surName && <p className="error">{errors.surName}</p>}
      </div>
      </div>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail adresinizi giriniz"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
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
      <div>
      <CustomSelect
              label="Şehir"
              name="city"
              placeholder="Lütfen Şehrinizi Seçiniz"
              onChange={handleChange}
              value= {values.city}
            >
              <option value="">Lütfen Şehir Seçiniz</option>
              <option value="ankara">Ankara</option>
              <option value="adana">Adana</option>
              <option value="aydın">Aydın</option>
              <option value="istanbul">İstanbul</option>
            </CustomSelect>
      </div>
      <div>
      <CustomSelect
              label="Okul"
              name="school"
              placeholder="Lütfen Okulunuzu Seçiniz"
              onChange={handleChange}
              value= {values.school}
            >
              <option value="">Lütfen Okulunuzu Seçiniz</option>
              <option value="trakyauniversitesi">Trakya Üniversitesi</option>
              <option value="medipoluniversitesi">Medipol Üniversitesi</option>
              <option value="sakaryauniversitesi">Sakarya Üniversitesi</option>
            </CustomSelect>
      </div>
         
  
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to="/portal">
        Portala Git
      </Link>
    </form>
    </Formik>
  );
}

export default GeneralForm;
