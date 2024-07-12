"use client"

import styled from 'styled-components';

export const BrowseDressSection = styled.section`
border-radius: 40px;
padding-bottom: 64px;
background: ${props => props.theme.gray};
@media screen and (max-width: 768px) {
    padding-bottom: 32px;
} 
`;

export const BrowseDressWrapper = styled.div`
    padding: 0 64px;
    @media screen and (max-width: 768px) {
        padding: 0 24px;
    }
`;

export const ImageBox = styled.div`
border-radius: 20px;
width:100%
background-color: ${props => props.theme.background};
`;

export const BrowseDressImageWrapper = styled.div`
position: relative;
width: 100%;
height: 289px;
@media screen and (max-width: 768px) {
    height: 198px;
} 
`;

export const BrowseDressTitle = styled.h1`
color: #000;
font-family: 'Satoshi', sans-serif;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
