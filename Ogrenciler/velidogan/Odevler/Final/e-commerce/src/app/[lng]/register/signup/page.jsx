"use client";
import { useState } from "react";
import { addUser, register } from "../../../../../firebase/firebase";
import { useSelector } from "react-redux";
import "@/app/styles/components/SignUp.scss";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
const SignUp = ({params}) => {
  const { t } = useTranslation(params.lng);
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(formData.email, formData.password);
    await addUser({
      uid: result.uid,
      todos: [],
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="formTitle">{t("signUp")}</h2>
      <input className="formInput"
        type="text"
        placeholder={t("e-mail")}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input className="formInput"
        type="password"
        placeholder={t("password")}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button className="formButton">{t("signUp")}</button>
    </form>
  );
};

export default SignUp;
