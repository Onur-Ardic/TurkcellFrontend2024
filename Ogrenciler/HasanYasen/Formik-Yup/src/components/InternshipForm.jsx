import { useFormik } from "formik"
import validationSchema from "../validations/validations.js"
import LoadingButton from "./LoadingButton"
import "../styles/InternshipForm.css"

const InternshipForm = () => {

  const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      city: '',
      university: '',
      internshipDay: '',
      internshipType: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 2000))
      console.table(values)
      bag.resetForm()
    },
    validationSchema
  })

  return (
    <div className='container'>
      <div className='row justify-content-md-center mt-2'>
        <div className='col-12 col-md-4'>
          <form onSubmit={handleSubmit} className='border border-1 rounded p-3'>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="firstName">First Name: </label>
              <input
                onBlur={handleBlur("firstName")}
                disabled={isSubmitting}
                value={values.firstName}
                className='form-control'
                id="firstName"
                name="firstName"
                placeholder="Jane"
                onChange={handleChange("firstName")}
                autoComplete='off'
                spellCheck="false"
              />
              {errors.firstName && touched.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="lastName">Last Name: </label>
              <input
                onBlur={handleBlur("lastName")}
                disabled={isSubmitting}
                value={values.lastName}
                className='form-control'
                id="lastName" name="lastName"
                placeholder="Doe"
                onChange={handleChange("lastName")}
                autoComplete='off'
                spellCheck="false"
              />
              {errors.lastName && touched.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="age">Age: </label>
              <input
                onBlur={handleBlur("age")}
                disabled={isSubmitting}
                value={values.age}
                className='form-control'
                id="age"
                name="age"
                placeholder="18"
                type="number"
                onChange={handleChange("age")}
                autoComplete='off'
                spellCheck="false"
              />
              {errors.age && touched.age && <div className="text-danger">{errors.age}</div>}
            </div>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="city">City: </label>
              <input
                onBlur={handleBlur("city")}
                disabled={isSubmitting}
                value={values.city}
                className='form-control'
                id="city"
                name="city"
                placeholder="New York"
                onChange={handleChange("city")}
                autoComplete='off'
                spellCheck="false"
              />
              {errors.city && touched.city && <div className="text-danger">{errors.city}</div>}
            </div>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="university">University: </label>
              <input
                onBlur={handleBlur("university")}
                disabled={isSubmitting}
                value={values.university}
                className='form-control'
                id="university"
                name="university"
                placeholder="Harvard"
                onChange={handleChange("university")}
                autoComplete='off'
                spellCheck="false"
              />
              {errors.university && touched.university && <div className="text-danger">{errors.university}</div>}
            </div>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="internshipDay">Internship Day: </label>
              <input
                onBlur={handleBlur("internshipDay")}
                disabled={isSubmitting}
                value={values.internshipDay}
                className='form-control'
                id="internshipDay"
                name="internshipDay"
                placeholder="20"
                type="number"
                onChange={handleChange("internshipDay")}
                autoComplete='off'
                spellCheck="false"
              />
              {errors.internshipDay && touched.internshipDay && <div className="text-danger">{errors.internshipDay}</div>}
            </div>
            <div className='mb-3'>
              <label className='fw-bold' htmlFor="internshipType">Internship Type: </label>
              <select
                disabled={isSubmitting}
                className='form-select'
                id="internshipType"
                name="internshipType"
                onChange={handleChange("internshipType")}
              >
                <option value="" defaultValue>Choose one option</option>
                <option value="compulsory">Compulsory</option>
                <option value="voluntary">Voluntary</option>
              </select>
            </div>
            <button
              disabled={isSubmitting}
              className='btn btn-success w-100 d-flex justify-content-center fw-bold'
              type="submit">{isSubmitting ? <LoadingButton /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InternshipForm