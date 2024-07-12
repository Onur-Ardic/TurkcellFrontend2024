"use client";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { object, string, ref } from "yup";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "@/navigation";
import { auth } from "@/lib/firebase";
import { notify } from "@/lib/notify";
import { addUser } from "@/server/user";

import Button from "@/components/Button";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--quaternary);
`;

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignupForm = () => {
  const t = useTranslations("Auth");
  const router = useRouter();

  const validationSchema = object({
    name: string().required(t("required")),
    email: string().email(t("invalidEmail")).required(t("required")),
    password: string().min(6, t("passwordTooShort")).required(t("required")),
    passwordConfirm: string()
      .oneOf([ref("password"), null], t("passwordNotMatch"))
      .required(t("required")),
  });

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => signup(values),
  });

  const signup = async (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        const userForDbJson = {
          id: user.uid,
          name: values.name,
          email: values.email,
        };
        addUser(userForDbJson).then(() => {
          notify(`${t("signupSuccess")} ${values.name}`, "success");
          router.push("/signin");
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          notify(t("emailInUse"), "error");
        } else {
          notify(t("signupError"), "error");
        }
      });
  };

  return (
    <StyledFormContainer>
      <h2 className="text-center">{t("signup")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            {t("name")}
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder={t("namePlaceholder")}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="text-danger text-end">{errors.name}</p>
          )}
        </div>

        <div className="my-3">
          <label htmlFor="email" className="form-label">
            {t("email")}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder={t("emailPlaceholder")}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-danger text-end">{errors.email}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            {t("password")}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder={t("passwordPlaceholder")}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <div className="text-danger text-end">{errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="passwordConfirm" className="form-label">
            {t("passwordConfirm")}
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            placeholder={t("passwordConfirmPlaceholder")}
            value={values.passwordConfirm}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div className="text-danger text-end">{errors.passwordConfirm}</div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-100 bg-black text-white"
        >
          {t("signup")}
        </Button>
      </form>
    </StyledFormContainer>
  );
};

export default SignupForm;
