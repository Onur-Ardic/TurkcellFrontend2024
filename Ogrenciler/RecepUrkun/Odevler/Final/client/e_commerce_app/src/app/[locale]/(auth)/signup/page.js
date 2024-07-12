'use client'

import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import toast from "react-hot-toast";
import { HeroButton } from "@/components/Hero/Styled";
import { authSchema } from "@/shema"
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slice/authSlice";
import Image from "next/image";
import signUpImg from "../../../../../public/register.jpg"

function SignUpForm() {

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const activeUrl = usePathname()
    const activeLang = activeUrl.split('/')[1];
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loggedInUsers = localStorage.getItem("loggedInUsers") || "";
            if (loggedInUsers) {
                dispatch(setUser(loggedInUsers));
            }
        }
    }, [dispatch]);

    const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values, actions) => {
        const { name, email, password } = values;
        if (!name || !email || !password) {
            alert(t('AllFieldsRequired'));
            return;
        }
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userEmail = userCredential.user.email;

            dispatch(setUser(userEmail))

            toast.success(t('SuccessMessage'), {
                icon: '🚀',
                style: {
                    borderRadius: '10px',
                    marginTop: '30px',
                    marginRight: '30px',
                    background: '#333',
                    color: '#fff',
                },
            });
            await delay(1000);
            setLoading(false);
            router.push(`/${activeLang}/login`);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(`{t('ErrorMessage')} ${errorMessage} `, {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    marginTop: '30px',
                    marginRight: '30px',
                    background: '#333',
                    color: '#fff',
                },
            })
            setLoading(false);
        }
        actions.resetForm();
    };

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
            surname: "",
            email: "",
            password: "",
            age: "",
            city: "",
            gender: "",
            electronicMessage: false,
            data: false,
        },
        validationSchema: authSchema,
        onSubmit,
    });

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
                                <Image src={signUpImg} fill alt="signup" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 border p-3 p-lg-5">
                            <form
                                className="row g-3"
                                onSubmit={handleSubmit}
                            >
                                <div className="col-12 col-md-6">
                                    <label htmlFor="name" className="form-label">
                                        {t('Name')}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={t('EnterName')}
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
                                        <h6 className="error text-danger   mt-1"> * {errors.name}</h6>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="surname" className="form-label">
                                        {t('Lastname')}
                                    </label>
                                    <input
                                        type="text"
                                        aria-label="Soyadiniz"
                                        value={values.surname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="surname"
                                        placeholder={t('EnterLastName')}
                                        className={
                                            errors.surname && touched.surname
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.surname && touched.surname && (
                                        <h6 className="error text-danger   mt-1"> * {errors.surname}</h6>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="email" className="form-label">
                                        {t('Email')}
                                    </label>
                                    <input
                                        type="text"
                                        aria-label="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="email"
                                        placeholder={t('EnterEmail')}
                                        className={
                                            errors.email && touched.email
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.email && touched.email && (
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
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="password"
                                        placeholder={t('EnterPassword')}
                                        className={
                                            errors.password && touched.password
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.password && touched.password && (
                                        <h6 className="error text-danger mt-1"> * {errors.password}</h6>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="city" className="form-label">
                                        {t('City')}
                                    </label>
                                    <input
                                        type="text"
                                        aria-label="Şehriniz"
                                        value={values.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="city"
                                        placeholder={t('EnterCity')}
                                        className={
                                            errors.city && touched.city
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.city && touched.city && (
                                        <h6 className="error text-danger mt-1"> * {errors.city}</h6>
                                    )}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="age" className="form-label">
                                        {t('Age')}
                                    </label>
                                    <input
                                        type="number"
                                        aria-label="Yaşınız"
                                        value={values.age}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="age"
                                        placeholder={t('Age')}
                                        className={
                                            errors.age && touched.age
                                                ? "input-error form-control"
                                                : "form-control"
                                        }
                                    />
                                    {errors.age && touched.age && (
                                        <h6 className="error text-danger mt-1"> * {errors.age}</h6>
                                    )}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputGender" className="form-label">{t('Gender')}</label>
                                    <select
                                        className={
                                            errors.gender && touched.gender
                                                ? "input-error form-select"
                                                : "form-select"
                                        }
                                        id="inputGender"
                                        aria-label="Gender select"
                                        value={values.gender}
                                        name="gender"
                                        onBlur={handleBlur}
                                        onChange={handleChange}>
                                        <option value="" label={t('SelectGenderLabel')} />
                                        <option value="Erkek">{t('Man')}</option>
                                        <option value="Kadın">{t('Woman')}</option>
                                    </select>
                                    {errors.gender && touched.gender && (
                                        <h6 className="text-danger mt-2"> * {errors.gender}</h6>
                                    )}
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="ElectroniCheck"
                                            checked={values.electronicMessage}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="electronicMessage"
                                        />
                                        <label className="form-check-label" htmlFor="ElectroniCheck">
                                            {t('ElectronicMesage')}
                                        </label>
                                        {errors.electronicMessage && touched.electronicMessage && (
                                            <h6 className="text-danger mt-2"> * {errors.electronicMessage}</h6>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="DataCheck"
                                            checked={values.data}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="data"
                                        />
                                        <label className="form-check-label" htmlFor="DataCheck">
                                            {t('Data')}
                                        </label>
                                        {errors.data && touched.data && (
                                            <h6 className="text-danger mt-2"> * {errors.data}</h6>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center pt-3">
                                    <HeroButton type="submit" disabled={isSubmitting} className="w-100">
                                        {t('SignInBtn')}
                                    </HeroButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>)}

        </div>
    );
}

export default SignUpForm;
