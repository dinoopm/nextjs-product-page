import {defineRouting} from 'next-intl/routing';
import {locales, defaultLocale} from '@/i18n/config';
export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale
});
