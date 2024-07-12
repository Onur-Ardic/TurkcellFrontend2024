"use client";
import { useFormik } from "formik/dist";
import {
  FormContainer,
  Input,
  InputContainer,
  InputIcon,
  SubscribeButton,
} from "./styles";
import { useTranslations } from "next-intl";
import { object, string } from "yup";
import { notify } from "@/lib/notify";

const Form = () => {
  const t = useTranslations("Footer");
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: object({
        email: string().email("Invalid email address").required("Required"),
      }),
      onSubmit: (values) => {
        notify(`${t("emailSend")}: ${values.email}`, "success");
      },
    });

  return (
    <FormContainer onSubmit={handleSubmit}>
      {errors.email && touched.email && (
        <p className="text-danger m-0 p-0">{errors.email}</p>
      )}
      <InputContainer>
        <Input
          type="email"
          name="email"
          placeholder={t("inputPlaceholder")}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <InputIcon />
      </InputContainer>
      <SubscribeButton type="submit">{t("subscribe")}</SubscribeButton>
    </FormContainer>
  );
};

export default Form;
