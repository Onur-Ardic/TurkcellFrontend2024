import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema, addressSchema } from "./GeneralForm";

const App = () => {
  const [formStep, setFormStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      username: "",
      university: "",
      isAccepted: false,
    },
    validationSchema: formStep === 0 ? basicSchema : addressSchema,
    onSubmit: (values) => {
      if (formStep === 0) {
        setFormStep(1);
      } else {
        alert(JSON.stringify(values, null, 2));
      }
    },
  });

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {formStep === 0 && (
          <>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            {formik.errors.age ? <div>{formik.errors.age}</div> : null}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </>
        )}

        {formStep === 1 && (
          <>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}

            <label htmlFor="university">University</label>
            <select
              id="university"
              name="university"
              onChange={formik.handleChange}
              value={formik.values.university}
            >
              <option value="">Select</option>
              <option value="ITU">ITU</option>
              <option value="BOUN">BOUN</option>
              <option value="YTU">YTU</option>
            </select>
            {formik.errors.university ? (
              <div>{formik.errors.university}</div>
            ) : null}

            <label>
              <input
                type="checkbox"
                name="isAccepted"
                onChange={formik.handleChange}
                checked={formik.values.isAccepted}
              />
              Accept Terms
            </label>
            {formik.errors.isAccepted ? (
              <div>{formik.errors.isAccepted}</div>
            ) : null}
          </>
        )}

        <button type="submit">{formStep === 0 ? "Next" : "Submit"}</button>
      </form>
    </div>
  );
};

export default App;
