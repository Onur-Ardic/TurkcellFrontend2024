import Breadcrumb from "@/components/Breadcrumb";
import { CartImageContainer, CartTitle, GoToCheckOut, ProductName, ProductPrice, SizeColor } from "./Styled";
import urun1 from "../../../../public/assets/Product/image9.png"
import Image from "next/image";
import { FaMinus, FaPlus, FaRegTrashAlt, FaArrowRight } from "react-icons/fa";
import { DetailsCounter } from "@/styles/Product";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("CartPage");
  return <div className="container">
    <Breadcrumb cartPage={true} />
    <CartTitle>{t('YourCart')}</CartTitle>
    <div className="d-flex flex-column flex-md-row mt-3_5 mt-md-4">
      <div className="col-12 col-md-6 border">
        <div className="d-flex p-4">
          <CartImageContainer>
            <Image className="rounded-3" src={urun1} alt="urun1" fill priority={false}
              sizes="(max-width: 425px) 99px, 124px" />
          </CartImageContainer>
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex flex-column ms-3">
              <ProductName>Gradient Graphic T-shirt</ProductName>
              <div>
                <SizeColor>{t('Size')}: Large</SizeColor>
                <SizeColor>{t('Color')}: White</SizeColor>
              </div>
              <ProductPrice>$145</ProductPrice>
            </div>
            <div className="d-flex flex-column align-items-end">
              <div>
                <FaRegTrashAlt size={24} color="red" cursor="pointer" />
              </div>
              <div className="mt-5_5">
                <DetailsCounter style={{ maxWidth: 126, height: 44 }}>
                  <FaMinus /> 1 <FaPlus />
                </DetailsCounter>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4"><hr className="my-1" /></div>
        <div className="d-flex p-4">
          <CartImageContainer>
            <Image className="rounded-3" src={urun1} alt="urun1" fill priority={false}
              sizes="(max-width: 425px) 99px, 124px" />
          </CartImageContainer>
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex flex-column ms-3">
              <ProductName>Gradient Graphic T-shirt</ProductName>
              <div>
                <SizeColor>Size: Large</SizeColor>
                <SizeColor>Color: White</SizeColor>
              </div>
              <ProductPrice>$145</ProductPrice>
            </div>
            <div className="d-flex flex-column align-items-end">
              <div>
                <FaRegTrashAlt size={24} color="red" cursor="pointer" />
              </div>
              <div className="mt-5_5">
                <DetailsCounter style={{ maxWidth: 126, height: 44 }}>
                  <FaMinus /> 1 <FaPlus />
                </DetailsCounter>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4"><hr className="my-1" /></div>
        <div className="d-flex p-4">
          <CartImageContainer>
            <Image className="rounded-3" src={urun1} alt="urun1" fill priority={false}
              sizes="(max-width: 425px) 99px, 124px" />
          </CartImageContainer>
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex flex-column ms-3">
              <ProductName>Gradient Graphic T-shirt</ProductName>
              <div>
                <SizeColor>Size: Large</SizeColor>
                <SizeColor>Color: White</SizeColor>
              </div>
              <ProductPrice>$145</ProductPrice>
            </div>
            <div className="d-flex flex-column align-items-end">
              <div>
                <FaRegTrashAlt size={24} color="red" cursor="pointer" />
              </div>
              <div className="mt-5_5">
                <DetailsCounter style={{ maxWidth: 126, height: 44 }}>
                  <FaMinus /> 1 <FaPlus />
                </DetailsCounter>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 ms-md-3_5 mt-3_5 mt-md-0 border h-100 p-4">
        <h4 className="fw-bold">{t('OrderSummary')}</h4>
        <div className="mt-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 ps-0">
              {t('Subtotal')}
              <span class="rounded-pill fw-bold">$565</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 ps-0">
              {t('Discount')} (-20%)
              <span class="text-danger rounded-pill fw-bold">-$113</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 ps-0">
              {t('DeliveryFee')}
              <span class="rounded-pill fw-bold">$15</span>
            </li>
            <hr className="my-2" />
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 ps-0 fw-semibold">
              {t('Total')}
              <span class="rounded-pill fw-bold">$467</span>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <form className="w-100">
            <input type="text" placeholder="Add promo code" className="form-control" style={{ borderRadius: 62, height: 48 }} />
          </form>
          <button className="btn ms-2" style={{ width: 119, height: 48, borderRadius: 62, backgroundColor: "#000", color: "#fff" }}>{t('Apply')}</button>
        </div>
        <GoToCheckOut>{t('GoToCheckOut')} <FaArrowRight /></GoToCheckOut>
      </div>
    </div>
  </div>;
};

export default CartPage;
