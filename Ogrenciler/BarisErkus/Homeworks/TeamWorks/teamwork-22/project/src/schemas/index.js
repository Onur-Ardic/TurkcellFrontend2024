import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("İsim girmek zorunludur"),
  surname: yup.string().required("Soyisim girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  city: yup.string().required("Şehir girmek zorunludur"),
  day: yup
    .number()
    .positive()
    .integer()
    .required("Gün sayısı girmek zorunludur"),
});
