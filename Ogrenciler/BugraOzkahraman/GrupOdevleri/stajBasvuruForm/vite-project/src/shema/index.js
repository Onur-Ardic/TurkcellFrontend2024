import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// ad-soyad, yaş, okul, şehir, zorunlum olup olmadığı(select ile), kaç gün staj yapılıcak
export const internSchema = yup.object().shape({
  name: yup
    .string()

    .required("İsim girmek zorunludur"),
  lastName: yup
    .string()

    .required("Soyisim girmek zorunludur"),
  city: yup
    .string()

    .required("Şehir girmek zorunludur "),
  school: yup
    .string()

    .required("Okul girmek zorunludur "),
  age: yup
    .number()
    .min(18, "Yaşınız en az 18 olmalı")
    .max(75, "Yaşınız en fazla 75 olmalı")
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  internShipDay: yup
    .number()
    .min(10, "Yaşınız en az 10 olmalı")
    .max(45, "Yaşınız en fazla 45 olmalı")
    .positive("Lütfen pozitif bir sayı giriniz")
    .integer("Lütfen günü tam sayı olarak giriniz")
    .required("Gün girmek zorunludur"),
  mandatory: yup
    .string()
    .oneOf(["Evet", "Hayır"], "Lütfen birini seçiniz")
    .required("Lütfen birini seçiniz"),
});
