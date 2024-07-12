"use client"
import React, { useState } from "react";
import { auth } from '@/firebase/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useTranslations } from 'next-intl';
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from '@/lib/features/auth/authSlice';
import useAuth from "@/lib/Hooks/useAuth";
import { addCartFromDB, clearCart } from "@/lib/features/cart/cartSlice";
import { getBasket } from "@/api/server";
import { SignFormContainer, SignInput } from "@/styles/ComponentStyle";
import { ApplyButton } from "@/styles/CartStyle";
import { SubscribeToNewsletter } from "@/styles/FooterStyle";
import { useRouter } from "next/navigation";


function page() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useAuth();
  const router = useRouter();


  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        dispatch(userLogin(user));
        const data = await getBasket(user.uid);
        dispatch(addCartFromDB(data.baskets))
        toast.success(t('loginSucces'));
        router.push('/');
      } catch (err) {
        toast.error(err.message);
      }
    }
    form.classList.add('was-validated');

  };
  const handleLogOut = async () => {
    try {
      dispatch(userLogout());
      dispatch(clearCart());
      toast.success(t('logoutSuccess'));
      router.push('/');
    } catch (err) {
      toast.error(t('wentWrong'));
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {currentUser ? (<><h1>{t('loginCheck')} <ApplyButton onClick={handleLogOut} className="mt-2">{t('logOut')}</ApplyButton></h1></>) : (
            <SignFormContainer>
              <div className="card-body">
                <h1 className="card-title text-center">{t('login')}</h1>
                <form onSubmit={(e) => { handleLogin(e) }} className='needs-validation' noValidate>
                  <div className="form-group">
                    <SignInput
                      type="email"
                      className="form-control mt-2"
                      placeholder={t('newsletterPlaceholder')}
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mt-2">
                    <SignInput
                      type="password"
                      className="form-control"
                      placeholder={t('password')}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <SubscribeToNewsletter type="submit" className="w-100 mt-2 border-none form-control">
                    {t('login')}
                  </SubscribeToNewsletter>
                </form>
              </div>
            </SignFormContainer>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;