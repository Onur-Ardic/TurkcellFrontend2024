import { useEffect, useState } from "react";
import { addUser, register } from "../service/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, FormButton, FormInput, FormTitle } from "../../styled";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>{t("signup")}</FormTitle>
      <FormInput
        type="text"
        placeholder={t("email")}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInput
        type="password"
        placeholder={t("password")}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <FormButton>{t("signup")}</FormButton>
    </Form>
  );
};

export default Signup;
