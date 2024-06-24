import { useState } from 'react'
import { Register } from '../firebase'
import { CustomButton, CustomInput, FormInput, SignForm } from './Styled'

const Sign = () => {
  const [onMail, setOnMail] = useState('')
  const [onPassword, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await Register(onMail, onPassword)
  }
  return (
    <>
      <SignForm onSubmit={handleSubmit} className="mx-auto">
        <h1>Kayıt Ol</h1>
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

        <CustomButton type="submit">Kayıt Ol</CustomButton>
      </SignForm>
    </>
  )
}

export default Sign
