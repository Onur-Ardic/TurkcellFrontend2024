"use client";
import { useEffect, useState } from "react";
import {signIn} from "../../../../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import "@/app/styles/components/Login.scss";
import toast from "react-hot-toast";
import { setUserMail } from "@/app/lib/auth/authSlice";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useTranslation } from "@/app/i18n/client";

const Login = ({params}) => {
  const { t } = useTranslation(params.lng);
  const { userMail } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn(formData.email, formData.password);
      dispatch(setUserMail(result.email));
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    if (userMail) {
      router.push("/");
    }
  }, [userMail]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="formTitle">{t("login")}</h2>
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
      <button className="formButton">{t("login")}</button>
      <h3>
        <Link href={`/register/signup`}>
          <p className="formQuestion">{t("signUp")}</p>
        </Link>
      </h3>
    </form>
  );
};

export default Login;
