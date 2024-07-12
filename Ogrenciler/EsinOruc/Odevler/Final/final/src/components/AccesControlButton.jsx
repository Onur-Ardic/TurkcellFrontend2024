"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebaseconfig";
import { useTranslations } from "next-intl";
import Link from "next/link";

const LoginRegisterControl = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const localeFromURL = pathname ? pathname.split("/")[1] : "tr";
  const locale = localeFromURL || "tr";
  const t = useTranslations("LoginRegister");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <Link
          id="logoutButton"
          href={`/${locale}`}
          onClick={() => {
            signOut(auth);
            setUser(null);
          }}
          style={{ display: "block", padding: "1rem" }}
        >
          Logout
        </Link>
      ) : (
        <>
          <Link
            className="dropdown-item"
            href={`/${locale}/register`}
            style={{
              outline: "none",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            {t("register")}
          </Link>
          <Link
            className="dropdown-item"
            href={`/${locale}/login`}
            style={{
              outline: "none",
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            {t("login")}
          </Link>
        </>
      )}
    </>
  );
};

export default LoginRegisterControl;
