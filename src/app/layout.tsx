import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Bubbles from '@/components/ui/Bubbles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Axi Community - Healing Happens Better, Together',
  description: 'A community-driven health management app where Connection is Medicine. Meet Axi, your AI health companion who connects you to others with your condition.',
  keywords: ['chronic illness', 'health community', 'patient support', 'caregiver support', 'health tracking', 'AI companion'],
  authors: [{ name: 'Axi Community' }],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Axi Community - Healing Happens Better, Together',
    description: 'Meet Axi—your AI health companion who connects you to the community you\'ve been looking for.',
    type: 'website',
    images: [{ url: '/visuals/AxiAvatar.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="underwater-bg min-h-screen relative">
          <Bubbles />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
