import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/content';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.role}`,
  description:
    'Backend developer building predictable production systems. Clear APIs, reliable data models, measurable performance.',
  openGraph: {
    title: `${SITE.name} | ${SITE.role}`,
    description:
      'Python, FastAPI, PostgreSQL. Clear APIs and reliable data models.',
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
