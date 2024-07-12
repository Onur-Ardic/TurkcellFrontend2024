 import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "tr"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
