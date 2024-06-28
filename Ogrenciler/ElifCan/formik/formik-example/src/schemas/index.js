import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

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
      ["Osmangazi", "bogazici", "gsu", "odtü", "itü"],
      "Lütfen üniversitenizi seçiniz"
    )
    .required("Lütfen üniversitenizi seçiniz"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır")
    .required("Kullanıcı adı zorunludur"),
  university: yup
    .string()
    .oneOf(
      ["bogazici", "gsu", "odtü", "itü", "osmangazi"],
      "Lütfen üniversitenizi seçiniz"
    )
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
