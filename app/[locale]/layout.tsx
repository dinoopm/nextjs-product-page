import { ReactNode } from "react";
import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';

interface Props {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider
          locale={locale}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
