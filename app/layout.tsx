import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GFE Hero Section - Featured Bullets',
  description: 'Hero Section - Featured Bullets project from GFE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
