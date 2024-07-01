import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("İsim girmek zorunludur"),
  surname: yup.string().required("Soy İsim girmek zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .min(18, "Lütfen 18 veya daha büyük bir yaş giriniz")
    .required("Yaş girmek zorunludur"),
  university: yup
    .string()
    .oneOf(
      ["bogazici", "gsu", "odtü", "itü"],
      "Lütfen üniversitenizi seçiniz"
    )
    .required("Lütfen üniversitenizi seçiniz"),
  internshipDays: yup
    .number()
    .positive("Lütfen pozitif bir gün sayısı giriniz")
    .integer("Lütfen gün sayısını tam sayı olarak giriniz")
    .required("Kaç gün staj yapacağınızı belirtiniz"),
  internshipType: yup
    .string()
    .oneOf(["zorunlu", "gönüllü"], "Lütfen staj türünü seçiniz")
    .required("Lütfen staj türünü seçiniz"),
});
