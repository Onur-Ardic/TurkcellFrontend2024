import { useState } from 'react'
import { Login } from '../firebase'
import { CustomButton, CustomInput, FormInput, SignForm } from './Styled'
import { useDispatch, useSelector } from 'react-redux'
import { login as loginHandle } from '../Redux/Slices/auth'
import { useNavigate } from 'react-router-dom'

const LoginArea = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const showLogin = useSelector((state) => state.todo.loginPreview)
  const [onMail, setOnMail] = useState('')
  const [onPassword, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let user = await Login(onMail, onPassword)
    dispatch(loginHandle(user))
    dispatch(showLogin(false))
  }
  if (user) {
    navigate('/home')
  }
  return (
    <>
      <SignForm onSubmit={handleSubmit} className="mx-auto">
        <h1>Giriş Yap</h1>
        <FormInput className="form-input">
          <label htmlFor="mail">E-Posta</label>
          <CustomInput
            type="mail"
            name="text"
            value={onMail}
            onChange={(e) => setOnMail(e.target.value)}
            className="border"
          />
        </FormInput>

        <FormInput className="form-input">
          <label htmlFor="pass">Şifre</label>
          <CustomInput
            type="password"
            value={onPassword}
            onChange={(e) => setPassword(e.target.value)}
            className="border"
          />
        </FormInput>

        <CustomButton type="submit">Giriş Yap</CustomButton>
      </SignForm>
    </>
  )
}

export default LoginArea
