'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalVariables =  createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Integral+CF:wght@700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

:root {

/* fonts */
--font-satoshi: Satoshi;
--font-integral-cf: 'Integral CF';

/* font sizes */
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-14xl-5: 2.094rem;
--font-size-xl: 1.25rem;
--font-size-8xl: 1.688rem;
--font-size-21xl: 2.5rem;
--font-size-5xl: 1.5rem;
--font-size-lgi: 1.188rem;
--font-size-13xl: 2rem;
--font-size-7xl: 1.625rem;
--font-size-xs: 0.75rem;
--font-size-29xl: 3rem;
--font-size-10xl: 1.813rem;
--font-size-19xl: 2.375rem;
--font-size-17xl: 2.25rem;
--font-size-3xl: 1.375rem;
--font-size-45xl: 4rem;
--font-size-32xl: 3.188rem;

/* Colors */
--color-white: #fff;
--color-whitesmoke-100: #f0f0f0;
--color-whitesmoke-200: #f0eeed;
--color-gray-100: rgba(0, 0, 0, 0.3);
--color-gray-200: rgba(0, 0, 0, 0.2);
--color-gray-300: rgba(0, 0, 0, 0.06);
--color-gray-400: rgba(0, 0, 0, 0.5);
--color-gray-500: rgba(0, 0, 0, 0.4);
--color-gray-600: rgba(0, 0, 0, 0.1);
--color-gray-700: rgba(0, 0, 0, 0.6);
--color-black: #000;
--color-gainsboro: #e6e6e6;
--color-darkslategray-100: #314f4a;
--color-darkslategray-200: #31344f;
--color-darkslategray-300: #333;
--color-darkslategray-400: rgba(51, 51, 51, 0.1);
--color-darkslategray-500: rgba(51, 51, 51, 0.09);
--color-tomato-100: #ff3333;
--color-tomato-200: rgba(255, 51, 51, 0.1);
--color-lightgray: #d6d6d6;
--color-deeppink: #f506a4;
--color-blueviolet: #7d06f5;
--color-deepskyblue: #06caf5;
--color-darkorange: #f57906;
--color-gold: #f5dd06;
--color-red: #f50606;

/* Gaps */
--gap-61xl: 5rem;
--gap-21xl: 2.5rem;
--gap-xl: 1.25rem;
--gap-31xl: 3.125rem;
--gap-6xl: 1.562rem;
--gap-lgi: 1.187rem;
--gap-xs: 0.75rem;
--gap-7xl: 1.625rem;
--gap-16xl: 2.187rem;
--gap-sm: 0.875rem;
--gap-3xl: 1.375rem;
--gap-4xl-5: 1.468rem;
--gap-base: 1rem;
--gap-lgi-5: 1.218rem;
--gap-11xs: 0.125rem;
--gap-9xs: 0.25rem;
--gap-15xl: 2.125rem;
--gap-mid: 1.062rem;
--gap-5xs: 0.5rem;
--gap-17xl: 2.25rem;
--gap-smi: 0.812rem;
--gap-7xs-3: 0.331rem;
--gap-2xs: 0.687rem;
--gap-3xs: 0.625rem;
--gap-5xl: 1.5rem;
--gap-45xl: 4rem;
--gap-13xl: 2rem;
--gap-xl-4: 1.275rem;
--gap-24xl: 2.687rem;
--gap-66xl: 5.312rem;
--gap-0: 0rem;
--gap-mini: 0.937rem;
--gap-6xs-5: 0.406rem;
--gap-2xl: 1.312rem;
--gap-4xl: 1.437rem;
--gap-mini-2: 0.887rem;
--gap-5xs-1: 0.443rem;
--gap-20xl: 2.437rem;
--gap-152xl: 10.687rem;
--gap-lg: 1.125rem;
--gap-87xl: 6.625rem;
--gap-34xl: 3.312rem;
--gap-91xl: 6.875rem;
--gap-8xl: 1.687rem;
--gap-36xl: 3.437rem;
--gap-35xl: 3.375rem;
--gap-29xl: 3rem;
--gap-12xl-5: 1.968rem;

/* Paddings */
--padding-121xl: 8.75rem;
--padding-xl: 1.25rem;
--padding-63xl: 5.125rem;
--padding-2xl: 1.312rem;
--padding-34xl: 3.312rem;
--padding-8xs: 0.312rem;
--padding-17xl: 2.25rem;
--padding-45xl: 4rem;
--padding-xs: 0.75rem;
--padding-105xl: 7.75rem;
--padding-base: 1rem;
--padding-lg: 1.125rem;
--padding-4xl: 1.437rem;
--padding-12xl: 1.937rem;
--padding-12xs: 0.062rem;
--padding-smi: 0.812rem;
--padding-19xl: 2.375rem;
--padding-10xs-5: 0.156rem;
--padding-80xl: 6.187rem;
--padding-10xs: 0.187rem;
--padding-5xs: 0.5rem;
--padding-7xs-5: 0.343rem;
--padding-355xl: 23.375rem;
--padding-168xl: 11.687rem;
--padding-4xs: 0.562rem;
--padding-81xl: 6.25rem;
--padding-525xl: 34rem;
--padding-253xl: 17rem;
--padding-31xl: 3.125rem;
--padding-13xl: 2rem;
--padding-27xl: 2.875rem;
--padding-11xl: 1.875rem;
--padding-11xs: 0.125rem;
--padding-7xs: 0.375rem;
--padding-3xs: 0.625rem;
--padding-mini: 0.937rem;
--padding-sm: 0.875rem;
--padding-10xl: 1.812rem;
--padding-mini-5: 0.906rem;
--padding-9xs: 0.25rem;
--padding-25xl: 2.75rem;
--padding-3xl: 1.375rem;
--padding-18xl: 2.312rem;
--padding-11xs-5: 0.093rem;
--padding-mini-4: 0.9rem;
--padding-9xl: 1.75rem;
--padding-37xl: 3.5rem;
--padding-5xl: 1.5rem;
--padding-11xs-4: 0.087rem;
--padding-7xl: 1.625rem;
--padding-26xl: 2.812rem;
--padding-51xl: 4.375rem;
--padding-57xl: 4.75rem;
--padding-30xl: 3.062rem;
--padding-6xl: 1.562rem;
--padding-60xl: 4.937rem;
--padding-lgi: 1.187rem;
--padding-20xl: 2.437rem;
--padding-29xl: 3rem;
--padding-23xl: 2.625rem;
--padding-73xl: 5.75rem;
--padding-41xl: 3.75rem;
--padding-mid: 1.062rem;
--padding-2xs: 0.687rem;
--padding-48xl: 4.187rem;

/* Border radiuses */
--br-7xs-4: 5.4px;
--br-xl: 20px;
--br-43xl: 62px;
--br-4xs-7: 8.7px;
--br-5xs: 8px;
--br-21xl: 40px;

}
`;
