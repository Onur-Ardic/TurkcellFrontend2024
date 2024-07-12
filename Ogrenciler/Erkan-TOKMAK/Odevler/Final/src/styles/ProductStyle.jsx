"use client"
import styled from 'styled-components';

export const ProductBackground = styled.div`
display: flex;
padding: 0px 13px 0px 14px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
background: #F0EEED;
overflow: hidden;
`;

export const ProductImageWrapper = styled.div`
width: 295px;
height: 298px;
@media screen and (max-width: 768px) {
    width: 198.671px;
height: 298.007px;
    }
`;

export const ProductDetailImageWrapper = styled.div`
width: 152px;
height: 167px;
@media screen and (max-width: 768px) {
    width: 111px;
height: 106px;
}
`;

export const ProductDetailImageColumn = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
@media screen and (max-width: 768px) {
    flex-direction: row;
`;

export const ProductDetailSingleImageBox = styled.div`
width: 444px;
height: 530px;
@media screen and (max-width: 768px) {
    width: 358px;
    height: 290px;
}
`;

export const ProductDetailTitle = styled.h1`
color: ${props => props.theme.color};
font-family: "Integral CF Bold";
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const ProductTitle = styled.h1`
color:  ${props => props.theme.color};
font-family: 'Satoshi', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media screen and (max-width: 768px) {
    font-size: 16px;
}
`;

export const ProductPrice = styled.h2`
color:  ${props => props.theme.color};
font-family: 'Satoshi', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media screen and (max-width: 768px) {
    font-size: 20px;
}
`;

export const ProductDetailPrice = styled.h2`
color: ${props => props.theme.color};
font-family: 'Satoshi', sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
`;

export const ProductDetailSelectText = styled.p`
color:  ${props => props.theme.deactiveBorder};
leading-trim: both;
text-edge: cap;
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const ProductDetailColors = styled.div`
width:37px;
height: 37px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    background-color: ${(props) => (props.color ? props.color : '')};
    border-color: ${(props) => (props.color ? (props.color === 'white' ? 'black' : props.color) : '')};
    border-width: 1px;
    border-style: solid;
    color: ${(props) => (props.color ? (props.color == 'white' ? 'black' : 'white') : '')};
`;

export const ProductDetailColorCheck = styled.p`
    text-align:center;
    width: 37px;
    height: 37px;
    
`;

export const ProductDetailColorInput = styled.input`
display: none;
`;

export const ProductDetailSizes = styled.label`
    padding: 12px 24px;
    border-radius: 62px;
    border: none;
    background-color: ${(props) => (props.size === props.selectedsize ? 'black ;' : '#F0F0F0')};
    color: ${(props) => (props.size === props.selectedsize ? 'white' : 'rgba(0, 0, 0, 0.6)')};
    cursor: pointer;
`;

export const ProductDetailSizeInput = styled.input`
display: none;
`;

export const QuantitiyMinus = styled.button`
background-color: #F0F0F0;
padding: 16px 20px 16px 20px;
border: none;
border-top-left-radius: 62px;
border-bottom-left-radius: 62px;
`;

export const QuantityPlus = styled.button`
background-color: #F0F0F0;
padding: 16px 20px 16px 20px;
border: none;
border-top-right-radius: 62px;
border-bottom-right-radius: 62px;
`;


export const QuantityValue = styled.p`
background-color: #F0F0F0;
align-self:center;
padding: 16px 20px 16px 20px;
margin: 0;
color: black;
`;

export const AddToCartButton = styled.button`
display: flex;
width: 100%;
height: 52px;
padding: 16px 54px;
justify-content: center;
align-items: center;
gap: 12px;
border: none;
border-radius: 62px;
background:  ${props => props.theme.zbackground};
color: ${props => props.theme.zcolor};
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const ProductDescription = styled.p`
color: ${props => props.theme.deactiveBorder};
leading-trim: both;
text-edge: cap;
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px;
`;

export const RatingValue = styled.span`
color: ${props => props.theme.color};
font-family: 'Satoshi', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left:13px;
`;

export const RatingValueMax = styled.span`
color: ${props => props.theme.deactiveBorder};
`;

export const OldPrice = styled.p`
color: ${props => props.theme.oldprice};
font-family: 'Satoshi', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: line-through;
@media screen and (max-width: 768px) {
    font-size: 20px;
}
`;
export const OldDetailPrice = styled.p`
color: rgba(0, 0, 0, 0.40);
font-family: 'Satoshi', sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: line-through;
@media screen and (max-width: 768px) {
    font-size: 24px;
}
`;

export const DiscountBox = styled.div`
padding: 6px 14px;
border-radius: 62px;
background: rgba(255, 51, 51, 0.10);
color: #F33;
font-family: 'Satoshi', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const ViewAllButton = styled.button`
display: flex;
background: #fff;
width: 218px;
height: 52px;
padding: 16px 54px;
justify-content: center;
align-items: center;
gap: 12px;
flex-shrink: 0;
border-radius: 62px;
border: 1px solid rgba(0, 0, 0, 0.10);
color: #000;
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;