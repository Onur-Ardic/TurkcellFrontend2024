"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { object, string } from "yup";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { useDispatch } from "react-redux";
import { removeUser, setUser } from "@/redux/slices/userSlice";
import { clearCart } from "@/redux/slices/cartSlice";
import { openHeader } from "@/redux/slices/globalSlice";

import { useRouter } from "@/navigation";
import { auth } from "@/lib/firebase";
import { notify } from "@/lib/notify";

import Button from "@/components/Button";
import styled from "styled-components";
import { useAuth } from "@/lib/useAuth";

const StyledFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--quaternary);
`;

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const t = useTranslations("Auth");
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useAuth();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validationSchema = object({
    email: string().email(t("invalidEmail")).required(t("required")),
    password: string().required(t("required")),
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
    onSubmit: (values) => login(values),
  });

  const login = async (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        dispatch(setUser(loggedUser));
        notify(t("success"), "success");
        router.push("/");
      })
      .catch(() => {
        notify(t("error"), "error");
      });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(clearCart());
      dispatch(removeUser());
      dispatch(openHeader());
      notify(t("logoutSuccess"));
      router.push("/signin");
    } catch {
      notify(t("error"), "error");
    }
  };

  if (!isMounted) {
    return null;
  }

  if (user) {
    return (
      <div className="d-flex align-items-center justify-content-center mt-5">
        <span>{t("youAreLoggedIn")}</span>
        <button
          className="bg-transparent border-0 text-warning"
          onClick={logout}
        >
          {t("clickHere")}
        </button>
      </div>
    );
  }

  return (
    <StyledFormContainer>
      <h2 className="text-center">{t("login")}</h2>
      <form onSubmit={handleSubmit}>
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-100 bg-black text-white"
        >
          {t("login")}
        </Button>
      </form>
    </StyledFormContainer>
  );
};

export default LoginForm;
