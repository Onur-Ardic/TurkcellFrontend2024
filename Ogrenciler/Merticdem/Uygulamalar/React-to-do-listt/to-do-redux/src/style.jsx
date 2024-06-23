import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    padding: 90px 60px;
    width: 70%;
    height: 100vh;
`

export const CardContainer = styled.div`
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 1rem;
    padding: 1rem 2rem;
`

export const Input = styled.input`
    padding: .5rem 1rem;
    border: none;
    border-bottom: 1px solid #ddd;
    border-radius: 1rem;
    width: 50%;
    position: relative;
    &:focus{
        border: none;
    }
`
export const Button = styled.button`
    position: absolute;
    left: 72%;
    top: 2px;
    border: none;
    background-color: #fff;
`

export const RelativeButton = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
`

export const Icon = styled.i`
    font-size: 20px;
`

export const UL = styled.ul`
    padding: .5rem;
    list-style: none;
    border: 1px solid #ddd;
    width: 50%;
    margin: 1rem auto;
    border-radius: 1rem;
`

export const List = styled.li`
    display: flex;
    justify-content: space-evenly;
`