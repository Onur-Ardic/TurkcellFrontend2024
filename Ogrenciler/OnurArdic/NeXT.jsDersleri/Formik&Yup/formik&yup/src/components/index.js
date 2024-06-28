import * as yup from 'yup'

export const basicSchema = yup.object().shape({
  email: yup.string().email('Geçerli bir email giriniz').required('Email alanı boş bırakılamaz'),
  password: yup
    .string()
    .min(8, 'Şifre en az 8 karakter olmalıdır')
    .required('Şifre alanı boş bırakılamaz'),
})
