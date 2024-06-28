import React from 'react'
import { useFormik } from 'formik'
import './App.css'
import { basicSchema } from './components'

function App() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onFocus={handleChange} value={values.email} />
        </div>
        {errors.email && <span className="error">{errors.email}</span>}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChange} value={values.password} />
        </div>
        {errors.password && <span className="error">{errors.password}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
