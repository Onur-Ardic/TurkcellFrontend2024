import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const internshipSchema = yup.object().shape({
  firstName: yup.string().required("Ad girmek zorunludur"),
  lastName: yup.string().required("Soyad girmek zorunludur"),
  tc: yup.string().length(11, "TC 11 haneli olmalıdır").required("TC girmek zorunludur"),
  phone: yup.string().required("Telefon numarası girmek zorunludur"),
  email: yup.string().email("Geçerli bir email giriniz").required("Email girmek zorunludur"),
  daysOfInternship: yup.number().positive("Pozitif bir sayı giriniz").required("Kaç gün staj yapacağınızı belirtin"),
  acceptTerms: yup.boolean().oneOf([true], "Kullanım koşullarını kabul etmelisiniz"),
});
