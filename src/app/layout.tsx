import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'BLETH - Tecnologia e Desenvolvimento de Software',
  description:
    'Construindo soluções digitais que transformam ideias em realidade. Desenvolvimento de software, sistemas, automações e plataformas modernas.',
  keywords:
    'desenvolvimento de software, sistemas, automações, plataformas web, tecnologia, BLETH',
  openGraph: {
    title: 'BLETH - Tecnologia e Desenvolvimento',
    description:
      'Construindo soluções digitais que transformam ideias em realidade.',
    url: 'https://bleth.com.br',
    siteName: 'BLETH',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'BLETH - Tecnologia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLETH - Tecnologia e Desenvolvimento',
    description:
      'Construindo soluções digitais que transformam ideias em realidade.',
    images: ['/images/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}