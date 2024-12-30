import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { SupabaseProvider } from '@/components/providers/supabase-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow Pro - Collaborative Project Management',
  description: 'A modern project management platform with real-time collaboration features',
  keywords: ['project management', 'collaboration', 'task management', 'team productivity'],
  authors: [{ name: 'TaskFlow Pro Team' }],
  openGraph: {
    title: 'TaskFlow Pro - Collaborative Project Management',
    description: 'A modern project management platform with real-time collaboration features',
    type: 'website',
    locale: 'en_US',
    url: 'https://taskflow-pro.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SupabaseProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}