'use client'

import { StyledLink } from "@/styles/ComponentStyle"
import { useTranslations } from "next-intl"

 
export default function GlobalError({ error, reset }) {
  const t = useTranslations()
  return (
    <html>
      <body>
        <h2>{t('somethingWrong')}</h2>
        <p>{error.message}</p>
        <StyledLink href="/">{t('returnHome')}</StyledLink> 
        <button onClick={reset}>{t('tryAgain')}</button>
      </body>
    </html>
  )
}