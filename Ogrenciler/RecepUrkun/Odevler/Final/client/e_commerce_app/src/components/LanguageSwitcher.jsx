"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const newPathname = pathname.replace(/^\/(en|tr)/, `/${nextLocale}`);
      router.replace(newPathname);
    });
  };

  return (
    <select
      defaultValue={localActive}
      onChange={onSelectChange}
      disabled={isPending}
      className="form-select form-select-sm me-3"
    >
      <option value="tr">TR</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
