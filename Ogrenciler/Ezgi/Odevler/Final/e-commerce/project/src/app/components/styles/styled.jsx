"use client";
import styled from 'styled-components';

export const HeaderTitle = styled.h1`
    font-family: 'Integral CF Bold', sans-serif;
    color: #000000;
    font-size: 32px;
    font-weight: 700;
    line-height: 38.4px;
    text-align: left;
    width: 160px;
    height: 22px;    
`

export const SearchInput = styled.input` 
    width: 577px;
    &:focus {
        outline: none;
    }
`

export const SearchArea = styled.div`
    width: 577px;
    height: 48px;
`
export const StyledBrowseByDressStyle = styled.div`
    width: 160px;
    height: 22px;
`

export const HeaderIcons = styled.div`
    width: 62px; 
    height: 24px;
`

export const FormArea = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: -80px;
    background: black;
    padding: 2rem;
`

export const EmailInput = styled.div`
    width: 349px;
    height: 48px;
    input:focus{
        outline: none;
    }
`

export const EmailButton = styled.button`
    width: 349px;
    height: 48px;
`

export const FooterItemsArea = styled.div`
    height: 499px;
`

export const FooterItems = styled.div`
    padding-top: 10rem;
`

export const ShowcaseInfo = styled.div`
    width: 577px;
`

export const ShowcaseArea = styled.div`
    width: 100%;
    height: 666px;
    background: #F2F0F1;
`

export const ShowcaseImg = styled.img`
    width: 500px;
    height: 666px;
    object-fit: cover;
`

export const ShowcaseTitle = styled.p`
    font-size: 64px;
    line-height: 64px;
`
export const ShowcaseButton = styled.button`
    width: 210px;
    height: 52px;
`
export const ProductImage = styled.img`
    width: 296px;
    height: 300px;
    object-fit: cover;
    display: block;
`
export const ProductTitle = styled.p`
    font-size: 20px;
    line-height: 27px;
    font-weight: 700
`
export const ProductPrice = styled.p`
    font-weight: bold;
    color: black;
`;

export const OriginalPrice = styled.p`
    text-decoration: line-through;
    color: grey;
    margin-right: 10px;
`;

export const DiscountPercentage = styled.p`
    font-weight: bold;
    color: red;
    width: 58px;
    height: Hug (28px)px;
    padding: 6px 14px 6px 14px;  
    background-color: #ffebeb;
    font-size: 12px
`;
export const ViewAllBtn = styled.button`
    width: 218px;
    height: 52px;
`
export const CardComment = styled.div`
    width: 400px;
    height: 240px;`
export const ProductDetailImage = styled.img`
    width: 444px;
    height: 530px;
    object-fit: cover
`


export const SizeOption = styled.div`
  padding: 10px 20px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => (props.selected ? 'black' : '#f0eeed')};
  color: ${props => (props.selected ? 'white' : 'black')};
  border-radius: 20px
`;

export const AddCartBtn = styled.button`
  padding: 15px 100px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
export const ImageOfCart = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;
export const QuantityArea = styled.div`
  width: 44px;
  height: 44px;
  input{
    width:40px;
    &:focus{
      outline: none;
    }
}
`;
export const ProductAddedToCart = styled.div`
  width: 800px;
  height: 260px
`;
export const OrderSummary = styled.div`
  width: 505px;
`;
export const TypeButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.selected ? 'blue' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const StyledColorButton = styled.button`
    width: 37px;
    height: 37px;
    background-color: ${props => props.color};
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    &::after {
        content: '${props => (props.selected ? "✓" : "")}';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 20px;
        opacity: ${props => (props.selected ? 1 : 0)};
        visibility: ${props => (props.selected ? 'visible' : 'hidden')};
    }
`;
export const ColorOption = styled(StyledColorButton)`
`;

export const StyledTypeButton = styled.button`
  background-color: ${props => (props.selected ? '#f0f0f0' : 'transparent')};
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    color: ${props => (props.selected ? '#333' : '#777')};
`;
export const StyledSizeButton = styled.button`
    font-weight: ${props => (props.selected ? 'bold' : 'normal')};
    border: none;
    padding: 8px 12px;
    margin-right: 8px;
    cursor: pointer;
    font-size: 14px;
    color: ${props => (props.selected ? '#000000' : '#777')};

`;
export const StyledCategoryButton = styled(StyledTypeButton)`
`;