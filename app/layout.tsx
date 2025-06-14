import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';

import { siteConfig } from '@/config/site';
import { manrope } from '@/config/fonts';
import AppNavbar from '@/components/AppNavbar';

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
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`${manrope}`}>
        <div className="relative flex flex-col h-screen ">
          <AppNavbar />

          <main className="container">{children}</main>

          <footer className="w-full flex items-center justify-center py-3">
            powered by CodeBOLT
          </footer>
        </div>
      </body>
    </html>
  );
}
