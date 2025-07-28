// app/layout.tsx

import Footer from '@/widgets/layout/Footer/Footer';
import Header from '@/widgets/layout/Header/Header';

import 'focus-visible';
import '@/styles/main.scss';


import { Montserrat, Inter } from 'next/font/google';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ru">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <div className="page">
          <Header />
          <div className='content'>
            <Providers>
              {children}
            </Providers>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}