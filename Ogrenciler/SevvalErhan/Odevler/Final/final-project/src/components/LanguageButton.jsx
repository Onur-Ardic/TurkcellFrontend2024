import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageButton = ({ initialLocale }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(initialLocale);

  useEffect(() => {
    const localeFromURL = pathname ? pathname.split("/")[1] : "tr";
    setCurrentLocale(localeFromURL);
  }, [pathname]);

  const handleLanguageChange = () => {
    const newLocale = currentLocale === 'tr' ? 'en' : 'tr';
    router.push(`/${newLocale}`);
  };

  return (
    <button  className="btn border-0 ps-3 bg-white" onClick={handleLanguageChange}>
      {currentLocale === 'tr' ? 'İngilizce' : 'Turkish'}
    </button>
  );
};

export default LanguageButton;
