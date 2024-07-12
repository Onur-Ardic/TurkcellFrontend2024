"use client";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../authenticantion/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterValidationSchema } from "@/schema/index";
import Loading from "@/app/[locale]/loading";
import "@/styles/css/main.css";

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const t = useTranslations("LoginRegister");
  const basicSchema = RegisterValidationSchema(t);

  const router = useRouter();
  const pathname = usePathname();
  const localeFromURL = pathname.split("/")[1];
  const locale = localeFromURL || "tr";
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  function handleFirebaseError(errorCode) {
    switch (errorCode) {
      case "auth/wrong-password":
        return t("wrong-password");
      case "auth/user-not-found":
        return t("userNotFound");
      case "auth/email-already-in-use":
        return t("emailAlreadyInUse");
      case "auth/operation-not-allowed":
        return t("operationNotAllowed");
      default:
        return t("defaultError");
    }
  }

  if (loading) return <Loading />;
  if (user) return null;

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{t("register")}</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={basicSchema}
          onSubmit={async (values) => {
            const { email, password, firstName, lastName } = values;
            setError(null);
            setSuccessMessage(null);
            try {
              const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
              await updateProfile(userCredential.user, {
                displayName: `${firstName} ${lastName}`,
              });
              setSuccessMessage(t("registerSuccess"));
              router.push(`/${locale}/login`);
            } catch (error) {
              setError(handleFirebaseError(error.code));
            }
          }}
        >
          <Form>
            <Field
              name="firstName"
              type="text"
              placeholder={t("firstNamePlaceholder")}
            />
            <ErrorMessage name="firstName" component="div" className="error" />

            <Field
              name="lastName"
              type="text"
              placeholder={t("lastNamePlaceholder")}
            />
            <ErrorMessage name="lastName" component="div" className="error" />

            <Field
              name="email"
              type="email"
              placeholder={t("emailPlaceholder")}
            />
            <ErrorMessage name="email" component="div" className="error" />

            <Field
              name="password"
              type="password"
              placeholder={t("passwordPlaceholder")}
            />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit">{t("register")}</button>
          </Form>
        </Formik>

        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <div className="additional-links">
          <a href="login">{t("login")}</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
