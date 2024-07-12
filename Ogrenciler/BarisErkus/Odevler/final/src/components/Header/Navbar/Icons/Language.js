"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

const Language = () => {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    const currentPathWithoutLocale = pathname.replace(
      `/${currentLanguage}`,
      ""
    );
    const newSearch = new URLSearchParams(searchParams.toString());
    startTransition(() => {
      router.push(
        `/${newLanguage}${currentPathWithoutLocale}?${newSearch.toString()}`
      );
    });
    setCurrentLanguage(newLanguage);
  };

  return (
    <button className="border-0 bg-transparent" onClick={changeLanguage}>
      {
        <Image
          src={
            currentLanguage === "tr"
              ? "/images/flags/tr.png"
              : "/images/flags/en.png"
          }
          width={24}
          height={24}
          alt="flag"
          priority
        />
      }
    </button>
  );
};

export default Language;
