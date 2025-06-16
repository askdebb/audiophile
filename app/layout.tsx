import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';

import { siteConfig } from '@/config/site';
import { manrope } from '@/config/fonts';
import AppNavbar from '@/components/AppNavbar';
import AppFooterComponent from '@/components/AppFooterComponent';
import CartContextProvider from '@/context/CartContextProvider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body className={`${manrope}`} suppressHydrationWarning={true}>
        <CartContextProvider>
          <div className="relative flex flex-col min-h-screen ">
            <AppNavbar />

            <main className="">{children}</main>

            <AppFooterComponent />
          </div>
        </CartContextProvider>
      </body>
    </html>
  );
}
