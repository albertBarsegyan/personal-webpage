import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '@/components/navbar/navbar';
import { PageLayout } from '@/components/layout/page-layout/page-layout';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div style={{ position:'relative' }}>
          <PageLayout>
            <Navbar/>
            {children}
          </PageLayout>
        </div>
      </body>
    </html>
  );
}
