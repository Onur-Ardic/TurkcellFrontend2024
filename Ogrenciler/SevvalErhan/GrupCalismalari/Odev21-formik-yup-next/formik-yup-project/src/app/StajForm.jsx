import styles from "./page.module.css";
import { Formik } from 'formik';
const StajForm = () => {
  return (
    <form className={styles.form}>
         <label htmlFor="name">Ad</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="surname">Soyad</label>
        <input type="text" name="surname" id="surname" />

        <label htmlFor="age">Yaş</label>
        <input type="number" name="age" id="age" />

        <label htmlFor="city">Şehir</label>
       <select name="city" id="city">
            <option value="">Elazığ</option>
            <option value="">Antalya</option>
            <option value="">Çorum</option>
       </select>

        <label htmlFor="university">Okul</label>
        <select name="university" id="university">
            <option value="">Fırat University</option>
            <option value="">Akdeniz University</option>
            <option value="">Hitit University</option>
        </select>

        <label htmlFor="checked">Seçiniz</label>
       
       <div>
            <input className={styles.radio} type="radio" name="checked" value="required" />
            Zorunlu
       </div>
        <div>
            <input className={styles.radio} type="radio" name="checked" value="voluntarily" /> 
            Gönüllü
        </div>

        <label htmlFor="day">Staj Süresi</label>
        <input type="number" name="day" id="day" />

        <button type="submit" className={styles.button}>Kaydet</button>

    </form>
  )
}

export default StajForm;