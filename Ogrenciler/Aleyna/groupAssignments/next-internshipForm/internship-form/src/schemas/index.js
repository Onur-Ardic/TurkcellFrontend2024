import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Ad girmek zorunludur!"),
  surname: yup.string().required("Soyad girmek zorunludur!"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir sayı giriniz!")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz!")
    .required("Yaş girmek zorunludur!"),
  city: yup.string().required("Şehir girmek zorunludur!"),
  university: yup.string().required("Üniversite girmek zorunludur!"),
  duration: yup
    .number()
    .positive("Lütfen pozitif bir değer giriniz!")
    .integer("Lütfen staj gün sayınızı tam sayı olarak giriniz!")
    .min(20, "Staj süresi en az 20 gün olmalıdır!")
    .required("Gün sayısı girmek zorunludur!"),
  internshipType: yup.string().required("Staj türü zorunludur!"),
});
