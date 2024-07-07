// next-i18next.config.mjs
import path from 'path';

export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr'],
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/public/locales',
};