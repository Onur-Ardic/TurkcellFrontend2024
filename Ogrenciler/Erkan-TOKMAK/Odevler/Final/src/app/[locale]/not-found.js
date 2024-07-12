import { StyledLink } from '@/styles/ComponentStyle'
import { useTranslations } from 'next-intl'

 
export default function NotFound() {
    const t= useTranslations();
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <StyledLink href="/">{t('returnHome')}</StyledLink>
    </div>
  )
}