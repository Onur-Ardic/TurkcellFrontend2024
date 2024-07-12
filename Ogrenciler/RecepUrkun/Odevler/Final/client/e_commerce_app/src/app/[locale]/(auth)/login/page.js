'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import Spinner from "@/components/Spinner";
import toast from "react-hot-toast";
import { HeroButton } from "@/components/Hero/Styled";
import loginImg from "../../../../../public/login.png"
import Image from "next/image";

function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter();
    const activeUrl = usePathname();
    const activeLang = activeUrl.split('/')[1];

    const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async () => {
        if (!validate()) return;

        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Successfully registered");
            await delay(500);
            setLoading(false);
            router.push(`/${activeLang}/user`);
        } catch (error) {
            console.error("Error: ", error);
            toast.error("Registration failed");
            setLoading(false);
        }
    };

    const t = useTranslations("SignUp");

    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                    <Spinner />
                </div>
            ) : (
                <div className="container p-3 p-lg-5">
                    <div className="d-flex flex-column flex-md-row p-3 p-lg-5">
                        <div className="col-12 col-md-6 border">
                            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                <Image src={loginImg} fill alt="signup" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 border p-3 p-lg-5">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="email" className="form-label">
                                        {t('Email')}
                                    </label>
                                    <input
                                        type="text"
                                        aria-label="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        placeholder={t('EnterEmail')}
                                        className={
                                            errors.email
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.email && (
                                        <h6 className="error text-danger mt-1"> * {errors.email}</h6>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="password" className="form-label">
                                        {t('Password')}
                                    </label>
                                    <input
                                        type="password"
                                        aria-label="Şifreniz"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        placeholder={t('EnterPassword')}
                                        className={
                                            errors.password
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.password && (
                                        <h6 className="error text-danger mt-1"> * {errors.password}</h6>
                                    )}
                                </div>
                                <div className="d-flex justify-content-center pt-3">
                                    <HeroButton type="button" disabled={loading} className="w-100" onClick={handleRegister}>
                                        {t('LoginBtn')}
                                    </HeroButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
