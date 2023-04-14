import Navbar from './components/Navbar';
import './globals.css';
import { Noto_Sans_JP, Roboto_Mono } from 'next/font/google';

const noto_sans_jp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['300', '400', '500', '700', '900'],
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans_jp.variable}${roboto_mono.variable} bg-slate-50 w-full min-h-fit`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
