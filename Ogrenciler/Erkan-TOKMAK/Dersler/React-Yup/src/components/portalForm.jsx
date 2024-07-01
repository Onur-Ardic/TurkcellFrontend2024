import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";


const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <input
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <select
              label="Okulunuz"
              name="university"
              placeholder="Kullanıcı Üniversitenizi Seçiniz"
            >
              <option value="">Lütfen Üniversiteniz Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </select>
            <checkbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>

          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;