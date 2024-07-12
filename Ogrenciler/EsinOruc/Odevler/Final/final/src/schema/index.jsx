import * as yup from "yup";
export function RegisterValidationSchema(t) {
  return yup.object().shape({
    firstName: yup
      .string()
      .min(2, t("inputMin"))
      .max(255, t("inputMax"))
      .required(t("firstNameRequired")),
    lastName: yup
      .string()
      .min(2, t("inputMin"))
      .max(255, t("inputMax"))
      .required(t("lastNameRequired")),
    email: yup.string().email(t("emailFormat")).required(t("emailRequired")),
    password: yup
      .string()
      .min(8, t("passwordMin"))
      .max(12, t("passwordMax"))
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]/,
        t("passwordMatches")
      )
      .required(t("passwordRequired")),
  });
}
export function loginValidationSchema(t) {
  return yup.object().shape({
    email: yup.string().email(t("emailFormat")).required(t("emailRequired")),
    password: yup.string().required(t("passwordRequired")),
  });
}
