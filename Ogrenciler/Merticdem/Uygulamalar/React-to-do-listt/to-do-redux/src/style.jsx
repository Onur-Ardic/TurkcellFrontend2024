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
    background-color: white;
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
    left: 70%;
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
    justify-content: space-between;
    width: 90%;
    border-bottom: 1px solid #ddd;
    padding: .5rem;
    &:last-child{
        border:none;

    }
`

export const UpdateButton = styled(Button)`
    position: static;
`
export const UpdateInput = styled(Input)`
    width: max-content;
`

export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`

export const IconButtons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;
`