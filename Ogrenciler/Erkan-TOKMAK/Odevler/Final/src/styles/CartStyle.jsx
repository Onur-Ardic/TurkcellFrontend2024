"use client"
import styled from 'styled-components';

export const CartTitle = styled.h1`
color: ${props => props.theme.color};
font-family: "Integral CF Bold";
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const CartContainer = styled.div`
background-color: ${props => props.theme.cartbg};
border-radius: 20px;
padding: 20px 24px;
border: 1px solid rgba(0, 0, 0, 0.10);
`;

export const ProductCartImageWrapper = styled.div`
position: relative;
width: 125px;
height: 187px;
@media screen and (max-width: 768px) {
    width: 99px;
    height: 99px;
}
`;

export const ProductCartVariableTitle = styled.span`
color: ${props => props.theme.color};
font-family: 'Satoshi' , sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const ProductCartVariable = styled.span`
color: ${props => props.theme.deactiveBorder};
font-family: 'Satoshi' , sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const TrashButton = styled.button`
border:none;
background-color: transparent;
`;

export const OrderTitle = styled.h1`
color: ${props => props.theme.color};
font-family: 'Satoshi' , sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const OrderPriceText = styled.p`
color: ${props => props.theme.deactiveBorder};
font-family: 'Satoshi' , sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const OrderTotalText = styled.p`
color: ${props => props.theme.color};
font-family: 'Satoshi' , sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const OrderPrice = styled.p`
color: ${props => props.theme.color};
text-align: right;
font-family: 'Satoshi' , sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const OrderTotalPrice = styled.p`
color:${props => props.theme.color};
text-align: right;
font-family: 'Satoshi' , sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const PromoContainer = styled.div`
position: relative;
`;
export const PromoInput = styled.input`
border-radius: 62px;
padding: 12px 16px 12px 40px;
border: none;
outline: none;
background: ${props => props.theme.gray};
`;

export const PromoIconContainer = styled.div`
position: absolute;
  top: 10px;
  left: 15px;
  opacity: 0.4;
`;

export const ApplyButton = styled.button`
display: flex;
padding: 12px 16px;
width: 100%;
justify-content: center;
align-items: center;
gap: 12px;
align-self: stretch;
border-radius: 62px;
border: none;
background: ${props => props.theme.zbackground};
color: ${props => props.theme.zcolor};
font-family: 'Satoshi',sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;