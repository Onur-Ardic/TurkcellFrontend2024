"use client";
import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomInput from "./CustomInput";
import CustomCheckbox from "./CustomCheckbox";
import CustomSelect from "./CustomSelect";

const internshipSchema = yup.object().shape({
  firstName: yup.string().required("Ad girmek zorunludur"),
  lastName: yup.string().required("Soyad girmek zorunludur"),
  age: yup.number().positive("Pozitif bir yaş giriniz").integer("Tam sayı giriniz").required("Yaş girmek zorunludur"),
  school: yup.string().required("Okul seçmek zorunludur"),
  city: yup.string().required("Şehir girmek zorunludur"),
  isMandatory: yup.boolean().oneOf([true], "Stajın zorunlu olduğunu kabul etmelisiniz"),
  daysOfInternship: yup.number().positive("Pozitif bir sayı giriniz").required("Kaç gün staj yapacağınızı belirtin"),
});

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function InternshipForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        school: "",
        city: "",
        isMandatory: false,
        daysOfInternship: "",
      }}
      validationSchema={internshipSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput label="Ad" name="firstName" type="text" placeholder="Adınızı giriniz" />
          <CustomInput label="Soyad" name="lastName" type="text" placeholder="Soyadınızı giriniz" />
          <CustomInput label="Yaş" name="age" type="number" placeholder="Yaşınızı giriniz" />
          <CustomSelect label="Okul" name="school">
            <option value="">Okulunuzu seçiniz</option>
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="gsu">Galatasaray Üniversitesi</option>
            <option value="odtu">ODTÜ</option>
            <option value="itu">İTÜ</option>
          </CustomSelect>
          <CustomInput label="Şehir" name="city" type="text" placeholder="Şehrinizi giriniz" />
          <CustomCheckbox label="Stajım zorunludur" name="isMandatory" />
          <CustomInput label="Kaç gün staj yapacaksınız?" name="daysOfInternship" type="number" placeholder="Gün sayısı" />
          <button disabled={isSubmitting} type="submit">Başvur</button>
        </Form>
      )}
    </Formik>
  );
}

export default InternshipForm;
