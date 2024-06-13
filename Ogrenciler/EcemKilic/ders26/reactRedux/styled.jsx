import style from "styled-components";

export const Container = style.div`
    max-width: 800px;
    margin: 1rem auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const H1 = style.h1`
    font-size:50px;
    text-align:center;
    margin-top:2rem;
`;

export const StyledForm = style.form`
    width: 100%;
    display:flex;
    margin: 3rem 0
`;
export const Input = style.input`
    width: 90%;
    margin-right:0.5rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    border:none;
    outline:none;
    background-color: #FFEEA9;
`;

export const Button = style.button`
    background-color:#FFEEA9;
    border:none;
    outline:none;
    color:black;
    border-radius: 2rem;
    cursor:pointer;
`;

export const FormButton = style(Button)`
    width: 5rem;
    padding: 1rem;
    
`;
export const TodoButton = style(Button)`
    padding: 0.5rem;
    background-color: #FFBF78;
    color:black;
    font-size:16px;
`;
export const StyledUl = style.ul`
    width:100%;
`;

export const StyledLi = style.li`
    display:flex;
    align-items:center;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 1rem;
    background-color:#FFEEA9;
    padding: 0.5em 1rem;
    border-radius:.75rem;
`;
export const ButtonDiv = style.div`
    display:flex;
    gap: 1rem;
`;
