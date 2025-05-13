import '@testing-library/jest-dom';
import messages from '@/messages/en-us.json';

// Helper function to resolve nested translation keys
function resolveKey(obj: any, path: string): string {
    return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? path;
}

// Mock client-side translations
jest.mock("next-intl", () => ({
    useTranslations: () => (key: string) => resolveKey(messages, key),
    NextIntlClientProvider: ({ children }: any) => children
}));

// Mock server-side translations
jest.mock("next-intl/server", () => ({
    getTranslations: (namespace: string) => (key: string) =>
        resolveKey(messages, `${namespace}.${key}`),
    getFormatter: () => ({})
}));
