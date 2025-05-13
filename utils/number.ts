export type Locale = 'de-DE' | 'en-US';

export function formatCurrency(value: number, locale: Locale = 'de-DE') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
    }).format(value / 100);
}
