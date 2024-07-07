

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header>
      <div>
        <Link href='/product'>
          <h2>
            {/* We simply give t() our translation key, and
                it renders its value in the active locale. */}
            {t('app_title')}
          </h2>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}