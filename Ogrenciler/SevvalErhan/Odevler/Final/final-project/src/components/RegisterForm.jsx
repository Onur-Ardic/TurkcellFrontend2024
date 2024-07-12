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
import Image from 'next/image';

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
    <div className="register-container">
      <div className="main-container">
        <Image className="mb-5" src="/assets/img/SHOP.CO.svg" alt="" width={200} height={100} />
        <div className="form-section w-100 d-flex flex-column justify-content-center">
          <h4 className="mb-2 ">{t("register")}</h4>
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
                className="input-field"
              />
              <ErrorMessage name="firstName" component="div" className="error" />

              <Field
                name="lastName"
                type="text"
                placeholder={t("lastNamePlaceholder")}
                className="input-field"
              />
              <ErrorMessage name="lastName" component="div" className="error" />

              <Field
                name="email"
                type="email"
                placeholder={t("emailPlaceholder")}
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error" />

              <Field
                name="password"
                type="password"
                placeholder={t("passwordPlaceholder")}
                className="input-field"
              />
              <ErrorMessage name="password" component="div" className="error" />

              <button type="submit" className="register-button">{t("register")}</button>
            </Form>
          </Formik>
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <div className="links">
            <a href="login">{t("login")}</a>
          </div>
        </div>
      </div>
      <div className="image-section">
        <Image
          src="/assets/img/shop.svg"
          alt="Shopping Image"
          objectFit="contain"
          layout="fill"
          className="image"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
