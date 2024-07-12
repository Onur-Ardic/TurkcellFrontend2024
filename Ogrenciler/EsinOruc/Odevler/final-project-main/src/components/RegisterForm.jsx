"use client";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebaseconfig";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../authenticantion/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterValidationSchema } from "@/schema/index";
import Loading from "@/app/[locale]/loading";
import Image from "next/image";

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
        return t(emailAlreadyInUse);
      case "auth/operation-not-allowed":
        return t(operationNotAllowed);
      default:
        return t(defautError);
    }
  }

  if (loading) return <Loading />;
  if (user) return null;

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-stretch">
        <div className="container-fluid h-100">
          <div className="row  h-100">
            <div className="col-md-6 d-flex align-items-center ">
              <div className="card p-4 mx-auto w-100">
                <h2>SHOP.CO</h2>
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
                      const userCredential =
                        await createUserWithEmailAndPassword(
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
                  <Form className="w-75 mx-auto my-5 ">
                    <div className="mb-3">
                      <Field
                        name="firstName"
                        type="text"
                        placeholder={t("firstNamePlaceholder")}
                        className="form-control rounded-5 py-3"
                      />
                      <ErrorMessage
                        name="firstName"
                        className="text-danger ps-3"
                        component="div"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        name="lastName"
                        type="text"
                        placeholder={t("lastNamePlaceholder")}
                        className="form-control rounded-5 py-3"
                      />
                      <ErrorMessage
                        name="lastName"
                        className="text-danger ps-3"
                        component="div"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        name="email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        className="form-control rounded-5 py-3"
                      />
                      <ErrorMessage
                        name="email"
                        className="text-danger ps-3"
                        component="div"
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
                        className="text-danger ps-3"
                        name="password"
                        component="div"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark w-100 rounded-5 py-3"
                    >
                      {t("register")}
                    </button>
                  </Form>
                </Formik>
                {error && <p className="text-danger ">{error}</p>}
                {successMessage && (
                  <p className="text-success">{successMessage}</p>
                )}

                <spa className="text-center">{t("controlRegister")}</spa>
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
    </>
  );
};

export default RegisterForm;
