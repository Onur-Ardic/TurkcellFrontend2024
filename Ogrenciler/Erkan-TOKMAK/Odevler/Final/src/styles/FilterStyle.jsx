"use client"
import styled from 'styled-components';
import RangeSlider from "react-range-slider-input";

export const FilterContainer = styled.div`
border-radius: 20px;
border: 1px solid rgba(0, 0, 0, 0.10);
padding: 20px 24px;
background-color: ${(props) => props.theme.zcolor};
`;

export const FilterHeader = styled.span`
color: ${(props) => props.theme.color};
font-family: 'Satoshi', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const StyledIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
`;

export const ClearButton = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
`;

export const FilterButton = styled.button`
background-color: ${props => props.selected ? '#808080' : '#fff'};
border: none;
`;

export const FilterCategoryTitle = styled.h3`
color: ${(props) => props.theme.color};
font-family: 'Satoshi', sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledRangeSlider = styled(RangeSlider)`
  margin: 60px auto 0;
  [data-vertical] {
    height: 300px;
  }
 color:#000;
[data-active] {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const ColorOption = styled.div`
width:37px;
height: 37px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    background-color: ${(props) => (props.color ? props.color : '')};
    border-color: ${(props) => (props.selected ? '#000' : '#F0F0F0')};
    border-width: ${(props) => (props.selected ? '2px' : '1px')};
    border-style: solid;
    content: ${(props) => (props.selected ? '✓' : '')};
    color: ${(props) => (props.color ? (props.color == '#ffffff' ? '#000000' : '#ffffff') : '')};
   `;

export const ProductSize = styled.button`
    padding: 10px 20px;
    border-radius: 62px;
    border: none;
    background-color: ${(props) => (props.selected ? '#000' : '#F0F0F0')};
    color: ${(props) => (props.selected ? '#fff' : 'rgba(0, 0, 0, 0.6)')};
    cursor: pointer;
    `;

export const ApplyFilterButton = styled.button`
border-radius: 62px;
border:none;
background: ${(props) => props.theme.zbackground};
padding: 16px 54px;
width: 100%;
color: ${(props) => props.theme.zcolor};
font-family: 'Satoshi', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const FilterInlineText = styled.span`
color: rgba(0, 0, 0, 0.60);
leading-trim: both;
text-edge: cap;
font-family: 'Satoshi', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;