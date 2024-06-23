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

export const TodoFormButton = style(Button)`
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
export const Form = style.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%)
`;

export const FormTitle = style.h1`
    text-align:center;
    margin:20px 0;
    color:#fff
`;

export const FormInput = style.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const FormButton = style.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  &:hover {
    background: rgb(200, 50, 70);
  }
`;

export const FormSingUp = style(FormButton)`
    max-width: 200px;
    text-decoration:none;
    margin:0;
`;
export const FormQuestion = style.p`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:4px 10px;
    color:#fff;
    border:1px solid #fff;
    margin:10px 0;
    box-shadow: 0 0 10px 10px rgba(255,255,255,0.2);
    transition: all .5s;
    &:hover {
        box-shadow: 0 0 5px 10px rgba(255,255,255,0.7)
    }
`;

export const UserHeader = style.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    color:#fff;
`;