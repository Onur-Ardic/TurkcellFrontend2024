"use client";

import { useRouter } from "next/navigation"
import React from "react"
import signUp from "../../firebase/auth/signup"
import signIn from "../../firebase/auth/signin"
import { toast } from "react-toastify";

export default function Profile() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const onSignup = async (event: any) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            toast.error('Lütfen bilgilerini kontrol ediniz')
        }
        else {
            toast.success('Kayıt başarılı')
            router.push("/")
        }
    }

    const onSignIn = async (event: any) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            toast.error('Giriş bilgilerini kontrol ediniz')
        }
        else {
            toast.success('Giriş başarılı')
            router.push("/")
        }
    }

    return (
        <>
            <section className="container mb-5">
                <hr />

                <div className="breadcrumb">
                    <p className="fs-6">
                        <span>
                            <a href="#" className="text-decoration-none text-secondary">Home</a>
                        </span>
                        <span>&nbsp; <i className="bi bi-chevron-left"></i> &nbsp;</span>
                        <span>Account</span>
                    </p>
                </div>

                <div className="account">
                    <div className="row">
                        <div className="create-acc col-md-6 my-2">
                            <div className="rounded-4 border border-1 py-3 px-4">
                                <div>
                                    <h1 className="fs-4 fw-bold text-center">Create account</h1>
                                    <hr />
                                </div>
                                <div>
                                    <form onSubmit={onSignup}>
                                        <div className="my-2">
                                            <label htmlFor="email" className="my-2">Enter your email:</label>
                                            <input
                                                className="main-input px-3 py-2 rounded-3"
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="email"
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="pass" className="my-2">
                                                Enter your password:
                                            </label>
                                            <input
                                                className="main-input px-3 py-2 rounded-3"
                                                type="password"
                                                id="pass"
                                                name="pass"
                                                placeholder="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="my-4">
                                            <button className="btn main-btn text-white w-100" type="submit">
                                                Sign up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="login-acc col-md-6 my-2">
                            <div className="rounded-4 border border-1 py-3 px-4">
                                <div>
                                    <h1 className="fs-4 fw-bold text-center">
                                        Login to your account
                                    </h1>
                                    <hr />
                                </div>
                                <div>
                                    <form onSubmit={onSignIn}>
                                        <div className="my-2">
                                            <label htmlFor="email" className="my-2">
                                                Enter your email:
                                            </label>
                                            <input
                                                className="main-input px-3 py-2 rounded-3"
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="email"
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="pass" className="my-2">
                                                Enter your password:
                                            </label>
                                            <input
                                                className="main-input px-3 py-2 rounded-3"
                                                type="password"
                                                id="pass"
                                                name="pass"
                                                placeholder="password"
                                                required
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="my-4">
                                            <button className="btn main-btn text-white w-100" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}