import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Lütfen minimum 2 karakter giriniz.")
    .max(255, "Maximum 255 karakter girebilirsiniz.")
    .required("İsim girmek zorunludur."),
  surname: yup
    .string()
    .min(2, "Lütfen minimum 2 karakter giriniz.")
    .max(255, "Maximum 255 karakter girebilirsiniz.")
    .required("Soyisim girmek zorunludur."),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  city: yup
    .string()
    .max(255, "Maximum 255 karakter girebilirsiniz.")
    .required("Şehir girmek zorunludur."),
  school: yup
    .string()
    .max(255, "Maximum 255 karakter girebilirsiniz.")
    .required("Okul girmek zorunludur."),
  internshipType: yup.string().required("Staj türü seçmek zorunludur."),
  duration: yup
    .number()
    .min(20, "Minimum 20 gün staj yapabilirsiniz.")
    .max(70, "Maximum 70 gün staj yapabilirsiniz.")
    .required("Staj süresi girmek zorunludur."),
});
