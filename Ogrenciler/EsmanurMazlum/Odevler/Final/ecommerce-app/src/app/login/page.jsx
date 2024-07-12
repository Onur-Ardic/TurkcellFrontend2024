'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter(); 


  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const handleSignUp = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await signInWithEmailAndPassword(values.email, values.password);
      console.log(res);
      sessionStorage.setItem("user", true);
      resetForm();
      router.push('/');
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="register-wrapper">
      <h3 className='text-center'>Login</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control border-0"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control border-0"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className='text-center'>
            <button type="submit" className="shop-now-btn" disabled={isSubmitting || loading}>
              {isSubmitting || loading ? 'Loginning...' : 'Login'}
            </button>
            </div>
            {error && <div className="text-danger mt-3">{error.message}</div>}
          </Form>
        )}
      </Formik>
      <p className='text-center mt-3'>Don't you have an account? <Link href="/login">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
