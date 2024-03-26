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
      <body className={montserrat.className}>
        <div style={{ position:'relative' }}>
          <Navbar/>
          <PageLayout>
            {children}
          </PageLayout>
        </div>
      </body>
    </html>
  );
}
