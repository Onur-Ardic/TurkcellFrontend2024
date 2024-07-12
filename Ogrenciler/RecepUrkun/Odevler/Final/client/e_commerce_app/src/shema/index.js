import * as yup from "yup";

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const authSchema = yup.object().shape({
    name: yup
        .string()
        .required("İsim girmek zorunludur"),
    surname: yup
        .string()
        .required("Soyisim girmek zorunludur"),
    email: yup
        .string()
        .trim()
        .required("Email girmek zorunludur")
        .email("Geçersiz email")
        .matches(emailRegex, "Geçersiz email"),
    password: yup
        .string()
        // .matches(passwordRules, { message: "Lütfen daha güçlü bir şifre oluşturun" })
        .required("Şifre girmek zorunludur"),
    age: yup
        .number()
        .min(13, "Yaşınız en az 13 olmalı")
        .max(90, "Yaşınız en fazla 90 olmalı")
        .integer("Lütfen yaşınızı tam sayı olarak giriniz")
        .required("Yaş girmek zorunludur"),
    city: yup
        .string()
        .required("Şehir girmek zorunludur"),
    gender: yup
        .string()
        .oneOf(["Erkek", "Kadın"], "Lütfen birini seçiniz")
        .required("Lütfen cinsiyetinizi seçiniz"),
    electronicMessage: yup
        .boolean()
        .oneOf([true], "Elektronik mesaj iznini kabul etmelisiniz:)"),
    data: yup
        .boolean()
        .oneOf([true], 'Datanizi kullanmamıza izin vermelisiniz:)')
});
