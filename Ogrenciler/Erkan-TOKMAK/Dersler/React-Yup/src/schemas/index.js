import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicShema = yup.object().shape(
    {
        email: yup
        .string()
        .email("Geçerli bir e-mail giriniz")
        .required("E-mail girmek zorunludur."),
        age: yup
        .number()
        .positive("Yaş pozitif bir sayı olmalıdır.")
        .integer("Yaş tam sayı olmalıdır.")
        .required("Yaş girmek zorunludur."),
        password: yup
        .string()
        .min(5, "Lütfen minimum 5 karakter giriniz.")
        .matches(passwordRules,{ message: "Şifreniz en az bir büyük harf, bir küçük harf ve bir rakam içermelidir."})
        .required("Şifre girmek zorunludur."),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"),], "Şifreler uyuşmuyor.")
        .required("Şifre tekrarı girmek zorunludur.")
    }
);

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır")
    .required("Kullanıcı adı zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});