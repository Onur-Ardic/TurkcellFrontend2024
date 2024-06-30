import * as yup from "yup";

export const basicSchema = yup.object().shape({
    name: yup
        .string()
        .required("İsim girmek zorunludur"),
    surname: yup
        .string()
        .required("Soyisim girmek zorunludur"),
    age: yup
        .number()
        .min(18, "Yaşınız 18'den büyük olmalıdır.")
        .positive("Lütfen pozitif bir yaş giriniz")
        .integer("Lütfen yaşınızı tam sayı olarak giriniz")
        .required("Yaş girmek zorunludur"),
    school: yup
        .string()
        .required("Okul girmek zorunludur"),
    city: yup
        .string()
        .required("Şehir girmek zorunludur"),
    internship_day: yup
        .number()
        .positive("Lütfen pozitif bir sayı giriniz")
        .integer("Lütfen tam sayı olarak giriniz")
        .required("Staj süresi girmek zorunludur"),
    // internship_type: yup
    //     .string()
    //     .oneOf(["compulsory", "voluntery"], "Lütfen birini seçiniz")
    //     .required("Lütfen staj tipini seçiniz"),
});