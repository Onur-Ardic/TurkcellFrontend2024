"use client";
import styles from "./page.module.css";
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

const StajForm = () => {

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        age: "",
        city: "",
        university: "",
        checked: "",
        day: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <form className={styles.form}>
        <h1>Staj Formu</h1>
        <label htmlFor="name">Ad</label>
        <input value={values.name} onChange={handleChange} type="text" name="name" id="name" />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="surname">Soyad</label>
        <input value={values.surname} onChange={handleChange} type="text" name="surname" id="surname" />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <label htmlFor="age">Yaş</label>
        <input value={values.age} onChange={handleChange} type="number" name="age" id="age" />
        {errors.age && <p className="error">{errors.age}</p>}

        <label htmlFor="city">Şehir</label>
        <select value={values.city} onChange={handleChange} name="city" id="city">
          <option value="el">Elazığ</option>
          <option value="an">Antalya</option>
          <option value="co">Çorum</option>
        </select>
        {errors.city && <p className="error">{errors.city}</p>}

        <label htmlFor="university">Okul</label>
        <select value={values.university} onChange={handleChange} name="university" id="university">
          <option value="fu">Fırat University</option>
          <option value="au">Akdeniz University</option>
          <option value="hu">Hitit University</option>
        </select>
        {errors.university && <p className="error">{errors.university}</p>}

        <label htmlFor="checked">Seçiniz</label>
        <fieldset
          className={styles.field}
          name="checked"
          id="checked"
          value={values.checked}
          onBlur={handleChange}
        >
          <div>
            <input className={styles.radio} type="radio" name="checked" id="required" value="required" />
            Zorunlu
          </div>
          <div>
            <input className={styles.radio} type="radio" name="checked" id="voluntarily" value="voluntarily" />
            Gönüllü
          </div>
          {errors.checked && <p className="error">{errors.checked}</p>}
        </fieldset>

        <label htmlFor="day">Staj Süresi</label>
        <input type="number" value={values.day} onChange={handleChange} name="day" id="day" />
        {errors.day && <p className="error">{errors.day}</p>}

        <button disabled={isSubmitting} type="submit" className={styles.button}>Kaydet</button>

      </form>
    </>
  )
}

export default StajForm;