"use client";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../authenticantion/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "@/schema/index";
import Loading from "@/app/[locale]/loading";
import "@/styles/css/main.css";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const t = useTranslations("LoginRegister");
  const loginSchema = loginValidationSchema(t);
  const router = useRouter();
  const pathname = usePathname();
  const localeFromURL = pathname.split("/")[1];
  const locale = localeFromURL || "tr";
  const { user, loading } = useAuth();

  function handleFirebaseError(errorCode) {
    switch (errorCode) {
      case "auth/wrong-password":
        return t("wrongPassword");
      case "auth/user-not-found":
        return t("userNotFound");
      default:
        return t("defaultError");
    }
  }

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) return <Loading />;
  if (user) return null;

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>{t("login")}</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async ({ email, password }) => {
            setError(null);
            try {
              await signInWithEmailAndPassword(auth, email, password);
              setSuccessMessage(t("loginSuccess"));
              router.push(`/${locale}/`);
            } catch (error) {
              setError(handleFirebaseError(error.code));
            }
          }}
        >
          <Form>
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

            <div className="remember-me">
              <Field type="checkbox" name="rememberMe" />
              <label htmlFor="rememberMe">{t("rememberMe")}</label>
            </div>

            <button type="submit">{t("login")}</button>
          </Form>
        </Formik>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <div className="additional-links">
          <a href="#forgot-password">{t("forgotPassword")}</a>
          <a href="register">{t("signup")}</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
