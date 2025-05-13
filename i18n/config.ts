export type Locale = (typeof locales)[number];

export const locales = ['en-us', 'de-de'] as const;
export const defaultLocale: Locale = 'en-us';