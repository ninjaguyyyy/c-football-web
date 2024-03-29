import Footer from 'app/components/Footer';
import Header from 'app/components/Header';
import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import 'styles/global.scss';
import LeftSidebar from 'app/components/LeftSidebar';

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <Header />

        <LeftSidebar className="fixed bottom-0 top-[60px] left-0 w-[160px] bg-white text-gray" />

        <main className="ml-[220px] text-dark flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer className="ml-[220px]" />
      </body>
    </html>
  );
}
