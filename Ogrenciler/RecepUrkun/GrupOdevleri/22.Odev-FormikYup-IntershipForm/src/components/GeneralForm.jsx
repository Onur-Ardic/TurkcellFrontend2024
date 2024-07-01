import { useFormik } from "formik";
import { internSchema } from "../shema";

const onSubmit = async (values, actions) => {
  console.log(values);

  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const {
    values,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      city: "",
      school: "",
      internShipDay: "",
      mandatory: "",
    },
    validationSchema: internSchema,
    onSubmit,
  });

  return (
    <div>
      <h1 className="text-center text-white display-3 fw-bolder mt-3 text-header">
        STAJ BASVURU FORMU
      </h1>
      <form
        className="d-flex justify-content-center align-items-center mt-5 pt-5"
        onSubmit={handleSubmit}
      >
        <div className="col-12 col-md-8 mx-auto border border-3 p-3 p-md-5 transparent">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="name" className="form-label">
                <h5 className="text-light fw-light">Adiniz</h5>
              </label>
              <input
                type="text"
                placeholder="Adınızı giriniz"
                aria-label="Adiniz"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                className={
                  errors.name && touched.name
                    ? "input-error form-control"
                    : "form-control"
                }
              />
              {errors.name && touched.name && (
                <h6 className="error text-light mt-1"> * {errors.name}</h6>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="lastName" className="form-label">
                <h5 className="text-light fw-light">Soyadiniz</h5>
              </label>
              <input
                type="text"
                aria-label="Soyadiniz"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                id="lastName"
                placeholder="Soyadınızı giriniz"
                className={
                  errors.lastName && touched.lastName
                    ? "input-error form-control"
                    : "form-control"
                }
              />
              {errors.lastName && touched.lastName && (
                <h6 className="error text-light mt-1"> * {errors.lastName}</h6>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="city" className="form-label">
                <h5 className="text-light fw-light">Şehriniz</h5>
              </label>
              <input
                type="text"
                aria-label="Şehriniz"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                id="city"
                placeholder="Şehrinizi giriniz"
                className={
                  errors.city && touched.city
                    ? "input-error form-control"
                    : "form-control"
                }
              />
              {errors.city && touched.city && (
                <h6 className="error text-light mt-1"> * {errors.city}</h6>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="age" className="form-label">
                <h5 className="text-light fw-light">Yaşınız</h5>
              </label>
              <input
                type="number"
                aria-label="Yaşınız"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                id="age"
                placeholder="Yaşınızı giriniz"
                className={
                  errors.age && touched.age
                    ? "input-error form-control"
                    : "form-control"
                }
              />
              {errors.age && touched.age && (
                <h6 className="error text-light mt-1"> * {errors.age}</h6>
              )}
            </div>
            <div className="col-12 col-md-12">
              <label htmlFor="school" className="form-label">
                <h5 className="text-light fw-light">Okulunuz</h5>
              </label>
              <input
                type="text"
                aria-label="Okulunuz"
                value={values.school}
                onChange={handleChange}
                onBlur={handleBlur}
                id="school"
                placeholder="Okulunuzu giriniz"
                className={
                  errors.school && touched.school
                    ? "input-error form-control"
                    : "form-control"
                }
              />
              {errors.school && touched.school && (
                <h6 className="error text-light mt-1"> * {errors.school}</h6>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="internShipDay" className="form-label">
                <h5 className="text-light fw-light">Staj Gün Sayiniz</h5>
              </label>
              <input
                type="number"
                aria-label="Staj Gün Sayiniz"
                value={values.internShipDay}
                onChange={handleChange}
                onBlur={handleBlur}
                id="internShipDay"
                placeholder="Staj gün sayisini giriniz"
                className={
                  errors.internShipDay && touched.internShipDay
                    ? "input-error form-control"
                    : "form-control"
                }
              />
              {errors.internShipDay && touched.internShipDay && (
                <h6 className="error text-light mt-1">
                  * {errors.internShipDay}
                </h6>
              )}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="mandatory" className="form-label">
                <h5 className="text-light fw-light"> Zorunlu Staj mı?</h5>
              </label>
              <select
                value={values.mandatory}
                onChange={handleChange}
                onBlur={handleBlur}
                id="mandatory"
                className={
                  errors.mandatory && touched.mandatory
                    ? "input-error form-select"
                    : "form-select"
                }
              >
                <option value="Boş">Seçin</option>
                <option value="Evet">Evet</option>
                <option value="Hayır">Hayır</option>
              </select>
              {errors.mandatory && touched.mandatory && (
                <h6 className="error text-light mt-1"> * {errors.mandatory}</h6>
              )}
            </div>
            <div className="d-flex justify-content-center pt-4">
              <button className="btn2" type="submit" disabled={isSubmitting}>
                <strong className="fw-light">GONDER</strong>
                <div id="container-stars">
                  <div id="stars"></div>
                </div>

                <div id="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GeneralForm;
