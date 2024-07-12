"use client"
import { useState } from "react"
import { useFormik } from "formik"
import validationSchema from "../validations/validations.js"
import LoadingButton from "./LoadingButton.jsx"
import toast from "react-hot-toast"
import { auth } from "../firebase/firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import Link from "next/link.js"

const Form = () => {

    const [signUp, setSignUp] = useState(true)

    const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, bag) => {
            await new Promise((r) => setTimeout(r, 2000))
            bag.resetForm()
        },
        validationSchema
    })

    const authFunc = async () => {
        if (signUp) {
            // register
            try {
                const data = await createUserWithEmailAndPassword(auth, values.email, values.password)
                const user = data.user
                if (user) {
                    window.location = "/"
                }
            } catch (error) {
                toast.error(error.message)
            }
        } else {
            // login
            try {
                const data = await signInWithEmailAndPassword(auth, values.email, values.password)
                const user = data.user
                if (user) {
                    window.location = "/"
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
    }

    return (
        <div className="form-container">
            <div className='container pt-5'>
                <Link href="/" className="text-decoration-none text-dark"><h2 className="logo">SHOP.CO</h2></Link>
                <h2 className="text-center mt-5 mb-3">{signUp ? "Register" : "Login"}</h2>
                <div className='row justify-content-md-center mt-2'>
                    <div className='col-12 col-md-4'>
                        <form onSubmit={handleSubmit} className='border border-1 rounded p-3 bg-info'>
                            <div className='mb-3'>
                                <label className='fw-bold' htmlFor="email">E-mail: </label>
                                <input
                                    type="email"
                                    onBlur={handleBlur("email")}
                                    disabled={isSubmitting}
                                    value={values.email}
                                    className='form-control'
                                    id="email"
                                    name="email"
                                    onChange={handleChange("email")}
                                    autoComplete='off'
                                    spellCheck="false"
                                />
                                {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                            <div className='mb-3'>
                                <label className='fw-bold' htmlFor="password">Password: </label>
                                <input
                                    type="password"
                                    onBlur={handleBlur("password")}
                                    disabled={isSubmitting}
                                    value={values.password}
                                    className='form-control'
                                    id="password"
                                    name="password"
                                    onChange={handleChange("password")}
                                    autoComplete='off'
                                    spellCheck="false"
                                />
                                {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
                            </div>
                            <p className="text-muted p" onClick={() => setSignUp(!signUp)}>{signUp ? "Already have an account?" : "Not a member?"}</p>
                            <button
                                onClick={authFunc}
                                disabled={isSubmitting}
                                className='btn btn-dark w-100 d-flex justify-content-center fw-bold'
                                type="submit">{isSubmitting ? <LoadingButton /> : (signUp ? "Register" : "Login")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form