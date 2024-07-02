import * as yup from "yup";
export const basicSchema = yup.object().shape({
    name: yup
        .string()
        .required("İsim girmek zorunludur"),
    surname: yup
        .string()
        .required("Soyad girmek zorunludur"),
    age: yup
        .number()
        .positive("Lütfen doğru bir yaş giriniz")
        .integer("Lütfen doğru bir yaş giriniz")
        .required("Yaş girmek zorunludur"),
    city: yup
        .string()
        .oneOf(["el", "an", "co"], "Lütfen Şehir seçiniz")
        .required("Lütfen Şehrinizi seçiniz"),
    university: yup
        .string()
        .oneOf(["fu", "au", "hu"], "Lütfen üniversitenizi seçiniz")
        .required("Lütfen üniversitenizi seçiniz"),
    checked: yup
        .string()
        .required("Lütfen staj tipi seçiniz"),
    day: yup
        .number()
        .positive("Lütfen pozitif bir gün değeri giriniz")
        .required("Gün girmek zorunludur"),

});

