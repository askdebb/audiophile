import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';

import Providers from './providers';

import { siteConfig } from '@/config/site';
import { manrope } from '@/config/fonts';
import AppNavbar from '@/components/AppNavbar';
import AppFooterComponent from '@/components/AppFooterComponent';

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
    <html className={manrope.className} lang="en">
      <head />
      <body>
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <AppNavbar />
            <main className="flex-1">{children}</main>
            <AppFooterComponent />
          </div>
        </Providers>
      </body>
    </html>
  );
}
