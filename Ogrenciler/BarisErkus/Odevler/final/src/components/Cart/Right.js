import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { useSelector } from "react-redux";
import { getProduct } from "@/server/product";
import { notify } from "@/lib/notify";

import Button from "@/components/Button";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";

const Right = () => {
  const t = useTranslations("Cart");
  const [couponCode, setCouponCode] = useState("");
  const [couponValue, setCouponValue] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const discount = subTotal - total;
  const deliveryFee = subTotal > 100 ? 0 : 10;

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    const calculateTotal = async () => {
      let newTotal = 0;
      let subTotal = 0;

      for (const item of cart) {
        const product = await getProduct(item.productId);
        const discountPrice = Math.round(
          product.price - product.price * (product.discount / 100)
        );
        subTotal += product.price * item.count;
        newTotal += discountPrice * item.count;
      }
      newTotal -= couponValue;
      setSubTotal(subTotal);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [cart, couponValue]);

  const applyCoupon = () => {
    if (cart.length === 0) {
      notify(t("emptyCart"), "error");
      return;
    }
    if (couponCode.toUpperCase() === "ATMOSWARE20") {
      setCouponValue(20);
      setCouponCode("");
      if (couponValue === 20) {
        notify(t("couponAlreadyApplied"), "error");
        return;
      }
      notify(t("couponApplied"), "success");
    } else {
      notify(t("invalidCouponCode"), "error");
    }
  };

  return (
    <div className="border rounded-4 p-4">
      <h5 className="fs-4 fw-bold mb-4">{t("orderSummary")}</h5>
      <div className="pb-3 mb-3 border-bottom">
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-5 mb-0">{t("subtotal")}</p>
          <p className="fs-5 mb-0 fw-bold">${subTotal}</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-5 mb-0">{t("discount")}</p>
          <p className="fs-5 mb-0 fw-bold text-danger">-${discount}</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p className="fs-5 mb-0">{t("deliveryFee")}</p>
          <p className="fs-5 mb-0 fw-bold">
            {deliveryFee === 0 ? t("deliveryFree") : `$${deliveryFee}`}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <p className="fs-5 mb-0">{t("total")}</p>
        <p className="fs-3 mb-0 fw-bold">${total + deliveryFee}</p>
      </div>
      <form>
        <div className="d-flex position-relative flex-grow-1">
          <span className="position-absolute top-50 start-0 translate-middle-y ms-3">
            <MdOutlineDiscount size={24} color="gray" />
          </span>
          <input
            className="form-control me-2 rounded-pill ps-5 py-2 pe-2 border-0 bg-light"
            type="text"
            placeholder={t("couponCode")}
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
        </div>
      </form>
      <Button
        theme="dark"
        className="rounded-pill d-flex text-center align-items-center justify-content-center ms-auto my-3 bg-black text-white"
        onClick={applyCoupon}
      >
        {t("apply")}
      </Button>
      <Button
        theme="dark"
        className="w-100 my-3 bg-black text-white"
        onClick={() => notify(t("gotoCheckout"))}
      >
        {t("gotoCheckoutText")} <BiSolidRightArrow className="ms-2" />
      </Button>
    </div>
  );
};

export default Right;
