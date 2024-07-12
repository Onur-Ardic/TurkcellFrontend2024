"use client";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/index";
import "./page.css";

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
        name: "",
        surname: "",
        university: "",
        email: "",
        age: "",
        internshipDays: "",
        internshipType: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Name</label>
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
        <label>Surname</label>
        <input
          type="text"
          value={values.surname}
          onChange={handleChange}
          id="surname"
          placeholder="Soyadınızı giriniz"
          className={errors.surname ? "input-error" : ""}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}
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
      <div className="inputDiv">
        <label>University</label>
        <select
          value={values.university}
          onChange={handleChange}
          id="university"
          className={errors.university ? "input-error" : ""}
        >
          <option value="" label="Üniversite seçiniz" />
          <option value="Osmangazi" label="Osmangazi" />
          <option value="bogazici" label="Boğaziçi" />
          <option value="gsu" label="GSU" />
          <option value="odtü" label="ODTÜ" />
          <option value="itü" label="İTÜ" />
        </select>
        {errors.university && <p className="error">{errors.university}</p>}
      </div>
      <div className="inputDiv">
        <label>Kaç gün staj yapacaksınız?</label>
        <input
          type="number"
          value={values.internshipDays}
          onChange={handleChange}
          id="internshipDays"
          placeholder="Gün sayısını giriniz"
          className={errors.internshipDays ? "input-error" : ""}
        />
        {errors.internshipDays && <p className="error">{errors.internshipDays}</p>}
      </div>
      <div className="inputDiv">
        <label>Zorunlu veya gönüllü mü?</label>
        <select
          value={values.internshipType}
          onChange={handleChange}
          id="internshipType"
          className={errors.internshipType ? "input-error" : ""}
        >
          <option value="" label="Staj türünü seçiniz" />
          <option value="zorunlu" label="Zorunlu" />
          <option value="gönüllü" label="Gönüllü" />
        </select>
        {errors.internshipType && <p className="error">{errors.internshipType}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
    </form>
  );
}

export default GeneralForm;
