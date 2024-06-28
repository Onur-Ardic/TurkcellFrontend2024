import * as yup from "yup";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email alanı zorunludur"),
    age: yup
    .number()
    .positive("Yaş alanı pozitif bir sayı olmalıdır")
    .integer("Yaş alanı tam sayı olmalıdır")
    .required("Yaş alanı zorunludur"),
    password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre alanı zorunludur")
    .matches(passwordRegex, {
        message: "Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir",
    }),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler uyuşmuyor")
    .required("Şifre tekrarı alanı zorunludur"),
});

export const addressSchema = yup.object().shape({
    username: yup.string()
    .min(2, "Kullanıcı adı en az 2 karakter olmalıdır")
    .required("Kullanıcı adı zorunludur"),
    university: yup.string()
    .oneOf(["ITU", "BOUN", "YTU"], "Geçerli bir üniversite seçiniz")
    .required("Üniversite zorunludur"),
    isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul etmelisiniz")
});