import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '@/components/navbar/navbar';
import { PageLayout } from '@/components/layout/page-layout/page-layout';
import  gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

gsap.registerPlugin(useGSAP);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#8b50ff"/>
        <link rel="shortcut icon" href="/img/favicon/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/img/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className={montserrat.className}>
        <div style={{ position: 'relative' }}>
          <Navbar/>
          <PageLayout>
            {children}
          </PageLayout>
        </div>
      </body>
    </html>
  );
}
