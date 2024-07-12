"use client"
import React, { useState } from "react";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "@/lib/features/auth/authSlice";
import { postUserToDB } from "@/api/server";
import useAuth from "@/lib/Hooks/useAuth";
import { clearCart } from "@/lib/features/cart/cartSlice";
import { SignFormContainer, SignInput, StyledLink } from "@/styles/ComponentStyle";
import { SubscribeToNewsletter } from "@/styles/FooterStyle";
import { useRouter } from "next/navigation";

function page() {
  const t = useTranslations();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
        if (form.checkValidity() === false) {
          e.stopPropagation();
        } else {
          try {
            const userCredential = await createUserWithEmailAndPassword(auth,
              email,
              password
            );
            const user = userCredential.user;
            console.log(user)
            const userId = user.uid;
            const userMail = user.email;
            const newUser = {
              id: userId,
              email: userMail,
              username: username,
              baskets: []
            }
            await postUserToDB(newUser);
            dispatch(userLogin(user));
            toast.success(t('signupSucces'));
            router.push('/');
          } catch (err) {
            toast.error(t('wentWrong'));
          }
        }
        form.classList.add('was-validated'); 
    
  };
  const handleLogOut = async () => {
    try {
      dispatch(userLogout());
      dispatch(clearCart());
      toast.success(t('logoutSuccess'));
    } catch (err) {
      toast.error(t('wentWrong'));
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {currentUser ? (<><h1>{t('loginCheck')}<button onClick={handleLogOut}>{t('logOut')}</button>.</h1></>) :
            (
              <SignFormContainer>
                <div className="card-body">
                  <h1 className="card-title text-center">{t('signUp')}</h1>
                  <form onSubmit={(e) => { handleSignup(e) }} noValidate className="needs-validation">
                    <div className="form-group mt-2">
                      <SignInput
                        type="text"
                        className="form-control"
                        placeholder={t('nameSurname')}
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mt-2">
                      <SignInput
                        type="email"
                        className="form-control"
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
                    {t('signUp')}
                  </SubscribeToNewsletter>
                  <p className="mt-2">{t('youHaveAccount')} <StyledLink href="/login" className="text-white"> {t('login')} </StyledLink></p>
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