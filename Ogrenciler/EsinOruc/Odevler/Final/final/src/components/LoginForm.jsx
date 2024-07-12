"use client";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseconfig";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../authenticantion/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "@/schema/index";
import Loading from "@/app/[locale]/loading";
import Image from "next/image";

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
    <div className="vh-100 d-flex justify-content-center align-items-stretch">
      <div className="container-fluid h-100">
        <div className="row  h-100">
          <div className="col-md-6 d-flex align-items-center ">
            <div className="card p-4 mx-auto w-100">
              <h2>SHOP.CO</h2>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                  setError(null);
                  try {
                    await signInWithEmailAndPassword(
                      auth,
                      values.email,
                      values.password
                    );
                    setSuccessMessage(t("loginSuccess"));
                    router.push(`/${router.locale}/`);
                  } catch (error) {
                    setError(handleFirebaseError(error.code));
                  }
                }}
              >
                <Form className="w-75 mx-auto my-5 ">
                  <div className="mb-3">
                    <Field
                      name="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      className="form-control rounded-5 py-3"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger ps-3"
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name="password"
                      type="password"
                      placeholder={t("passwordPlaceholder")}
                      className="form-control rounded-5 py-3"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger ps-3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-100 rounded-5 py-3"
                  >
                    {t("login")}
                  </button>
                </Form>
              </Formik>
              {error && <p className="text-danger ">{error}</p>}
              {successMessage && (
                <p className="text-success">{successMessage}</p>
              )}

              <spa className="text-center">{t("controlLogin")}</spa>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block bg-dark position-relative ">
            <Image
              src="/assets/img/shopping.png"
              alt="Shopping Image"
              objectFit="contain"
              layout="fill"
              className="rounded-4 w-100 h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
