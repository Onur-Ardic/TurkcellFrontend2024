'use client'

import { basicSchema } from '@/app/(schema)'
import { useFormik } from 'formik'
const onSubmit = async (values, action) => {
  console.log(values)
  console.log(action)

  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  action.resetForm()
}

const Form = () => {
  const { values, errors, handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      school: '',
      city: '',
      day: '',
      stajType: 'zorunlu',
      check: false,
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-wrapper bg-blue-300 p-10 rounded-sm">
        <h3 className="mb-10">Staj Başvuru Formu</h3>
        <div className="form-input flex flex-col">
          <label htmlFor="name">İsim</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            className="border"
            onChange={handleChange}
          />

          {errors.name && <span className="text-red-900">{errors.name}</span>}
        </div>

        <div className="form-input flex flex-col">
          <label htmlFor="surname">Soyisim</label>
          <input
            type="text"
            id="surname"
            name="surname"
            onChange={handleChange}
            value={values.surname}
          />

          {errors.surname && <span className="text-red-900">{errors.surname}</span>}
        </div>

        <div className="form-input flex flex-col">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />

          {errors.email && <span className="text-red-900">{errors.email}</span>}
        </div>

        <div className="form-input flex flex-col">
          <label htmlFor="school">Okul Bilgisi</label>
          <input
            type="text"
            name="school"
            id="school"
            onChange={handleChange}
            value={values.school}
          />

          {errors.school && <span className="text-red-900">{errors.school}</span>}
        </div>

        <div className="form-input flex flex-col">
          <label htmlFor="city">Şehir Bilgisi</label>
          <input type="text" name="city" id="city" onChange={handleChange} value={values.city} />
          {errors.city && <span className="text-red-900">{errors.city}</span>}
        </div>

        <div className="form-input flex flex-col">
          <label htmlFor="stajType">Staj Tipi</label>
          <select name="stajType" id="stajType" onChange={handleChange} value={values.stajType}>
            <option value="zorunlu">Zorunlu</option>
            <option value="gönüllü">Gönüllü</option>
          </select>
          {errors.stajType && <span className="text-red-900">{errors.stajType}</span>}
        </div>

        <div className="form-input flex flex-col">
          <label htmlFor="day">Staj Süresi</label>
          <input type="number" name="day" id="day" onChange={handleChange} value={values.day} />
          {errors.day && <span className="text-red-900">{errors.day}</span>}
        </div>

        <div className="form-input flex">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="me-2"
            onChange={handleChange}
            value={values.check}
          />
          <label htmlFor="kvkk">Kullanıcı Sözleşmesi</label>
          {errors.check && <span className="text-red-900">{errors.check}</span>}
        </div>

        <div className="form-input">
          <button
            type="submit"
            disabled={isSubmitting}
            className="p-1 transition-all bg-white text-black rounded-sm hover:bg-black hover:text-white "
          >
            Gönder
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
