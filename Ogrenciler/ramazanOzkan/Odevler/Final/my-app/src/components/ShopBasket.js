"use client";
import { useState } from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const BasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CartItems = styled.div`
  flex: 2;
  margin-right: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const ItemName = styled.h5`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  color: red;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PromoInput = styled.input`
  width: calc(100% - 60px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ApplyButton = styled.button`
  padding: 10px;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

const ShopBasket = (props) => {
  const [basket, setBasket] = useState(props.basket);
  const subtotal = basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  var deliveryFee = 0;
  if (subtotal > 0) {
    deliveryFee = 15;
  } else {
    deliveryFee = 0;
  }

  const total = subtotal - discount + deliveryFee;

  const removeFromBasket = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setBasket(basket.filter((item) => item.id !== id));
        } else {
          throw new Error("Hata oluştu");
        }
      })
      .catch((err) => alert(err.message));
  };

  const handleQuantity = (id, quantity) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
    })
      .then((res) => {
        if (res.ok) {
          setBasket(
            basket.map((item) =>
              item.id !== id ? item : { ...item, quantity }
            )
          );
        } else {
          throw new Error("Hata oluştu");
        }
      })
      .catch((err) => alert(err.message));
  };
  const t = useTranslations("ShopBasket");
  return (
    <BasketContainer>
      <CartItems>
        {basket.map((item) => (
          <Item key={item.id}>
            <ItemDetails>
              <ItemImage src={item.img} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <p>
                  {t("size")}: {item.selectedSize}
                </p>
                <p>
                  {t("color")}: {item.selectedColor}
                </p>
                <ItemPrice>${item.price}</ItemPrice>
              </ItemInfo>
            </ItemDetails>
            <ItemActions>
              <QuantityButton
                disabled={item.quantity === 1}
                onClick={() => handleQuantity(item.id, item.quantity - 1, item)}
              >
                -
              </QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton
                onClick={() => handleQuantity(item.id, item.quantity + 1, item)}
              >
                +
              </QuantityButton>
              <RemoveButton onClick={() => removeFromBasket(item.id)}>
                &times;
              </RemoveButton>
            </ItemActions>
          </Item>
        ))}
      </CartItems>
      <OrderSummary>
        <h5>{t("Order Summary")}</h5>
        <SummaryItem>
          <span>{t("Subtotal")}</span>
          <span>${subtotal}</span>
        </SummaryItem>
        <SummaryItem>
          <span>{t("Discount")} (-20%)</span>
          <span>-${discount.toFixed(2)}</span>
        </SummaryItem>
        <SummaryItem>
          <span>{t("Delivery Fee:")}</span>
          <span>${deliveryFee}</span>
        </SummaryItem>
        <SummaryItem>
          <h5>{t("Total")}</h5>
          <h5>${total.toFixed(2)}</h5>
        </SummaryItem>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <PromoInput type="text" placeholder={t("placeholder")} />
          <ApplyButton>{t("Apply")}</ApplyButton>
        </div>
        <CheckoutButton>{t("Go to Checkout")}</CheckoutButton>
      </OrderSummary>
    </BasketContainer>
  );
};

export default ShopBasket;
