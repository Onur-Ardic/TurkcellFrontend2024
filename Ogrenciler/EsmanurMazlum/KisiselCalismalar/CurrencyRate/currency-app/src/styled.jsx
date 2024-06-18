import styled from "styled-components";


export const CurrencyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 10rem;
    background-color: #F5F7F8;
    opacity: 1;
    padding: 1.5rem;
    position: absolute;
    top: 30%;
    left: 40%;
    transform: translate(-50%,-50%);
    width: 40%;
    height: 30%;
    border-radius: 1.5rem;
`

export const Header = styled.h2`
    font-size: 2rem;
    font-family: sans-serif;
    margin-top: 0;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Input = styled.input`
    line-height: 1.5rem;
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid #C7C8CC;
    font-size: 1rem;
    outline: none;
    &:focus{
        border:2px solid #F4CE14;
    }
    width: 30%;
`

export const Select = styled.select`
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid #F4CE14;
    background-color: #F4CE14;
    font-size: 1rem;
    outline: none;
    font-weight: bold;
    &:focus{
        border:2px solid #F4CE14;
    }
    width: 15%;
`
export const Button = styled.button`
    padding: 1rem 2rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    background-color: #45474B;
    color: #F4CE14;
    border: 1px solid #45474B;
    border-radius: .7rem;
    cursor: pointer;
`