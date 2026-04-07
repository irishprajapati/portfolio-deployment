import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Irish Prajapati | Backend Developer',
  description:
    'Backend developer building predictable production systems. Clear APIs, reliable data models, measurable performance.',
  openGraph: {
    title: 'Irish Prajapati | Backend Developer',
    description:
      'Python, FastAPI, PostgreSQL. Clear APIs and reliable data models.',
    url: 'https://prajapatiirish.com.np',
    siteName: 'Irish Prajapati',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans min-h-screen`}
      >
        <ThemeProvider>
          <div className="fixed inset-0 -z-10 bg-white dark:bg-surface">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(139,92,246,0.06),transparent)]" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
