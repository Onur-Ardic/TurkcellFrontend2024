import * as yup from "yup";
//const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//const surNameRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Adınız 3 harften kısa olamaz")
    .required("adınızı girmek zorunludur"),
  surName: yup
    .string()
    .required("Soyadınız girmek zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  // password: yup
  //   .string()
  //   .min(5, "Lütfen minumun 5 karakter giriniz")
  //   .matches(passwordRules, {
  //     message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
  //   })
  //   .required("Şifre girmek zorunludur"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
  //   .required("Tekrar şifre girmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır")
    .required("Kullanıcı adı zorunludur"),
  city: yup
    .string()
    .oneOf(["ankara", "adana", "aydın", "istanbul"], "Lütfen Şehrinizi Seçiniz")
    .required("Lütfen Şehrinizi Seçiniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
