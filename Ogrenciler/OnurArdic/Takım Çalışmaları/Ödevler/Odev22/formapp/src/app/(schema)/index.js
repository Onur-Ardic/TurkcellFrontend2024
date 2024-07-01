import * as yup from "yup";

export const bschema = yup.object().shape({
  name: yup.string().required(" isim boş olamaz"),

  surname: yup.string().required(" soyisim boş olamaz"),

  email: yup
    .string()
    .required("email boş bırakılamaz")
    .email("Geçerli bir email giriniz"),

  age: yup
    .number()
    .positive("lütfen pozitif yaş giriniz")
    .integer("lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş boş bırakılamaz"),

  school: yup.string().required("okul boş olamaz"),

  city: yup.string().required("şehir boş olamaz"),

  stajType: yup
    .string()
    .oneOf(["zorunlu", "gönüllü"])
    .required("staj türünüzü boş bırakılamaz"),

  day: yup
    .number()
    .positive("lütfen pozitif gün giriniz")
    .integer("lütfen tam sayı olarak giriniz")
    .required("Gün boş bırakılamaz"),

  check: yup
    .boolean()
    .oneOf([true], "kullanım koşullarını kabul ediniz")
    .required("kullanım koşullarını kabul etmek zorunludur"),
});
