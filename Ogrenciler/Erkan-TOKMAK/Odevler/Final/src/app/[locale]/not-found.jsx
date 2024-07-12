import { StyledLink } from "@/styles/ComponentStyle";
import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations()
    const locale = useLocale()
    return (
        <div>
            <h1>{t('404ntf')}</h1>
            <StyledLink href={`${locale}/`}>{t('returnHome')}</StyledLink>
        </div>
    )
}