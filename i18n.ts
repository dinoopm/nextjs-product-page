import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from '@/i18n/config';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Missing translations for ${locale}`);
    notFound();
  }

  return {
    locale,
    messages
  };
});
