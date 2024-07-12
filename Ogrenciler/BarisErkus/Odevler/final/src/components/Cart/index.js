"use client";
import { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { useAuth } from "@/lib/useAuth";
import { useRouter } from "@/navigation";
import { notify } from "@/lib/notify";
import { useTranslations } from "next-intl";

const Cart = () => {
  const t = useTranslations("Cart");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const user = useAuth();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!user) {
    notify(t("youMustLoginFirst"), "error");
    router.push("/signin");
  }

  return (
    <div className="container mt-5">
      <div className="row gap-5 justify-content-center">
        <div className="col-lg-6 p-0">
          <Left />
        </div>
        <div className="col-lg-5 p-0">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Cart;
