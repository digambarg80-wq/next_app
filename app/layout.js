import { Roboto, Work_Sans } from "next/font/google";
import "./globals.css";
// import Navigation from '@/components/navigation'; 
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${roboto.variable} ${workSans.variable}`}>
       {/* <Navigation/> */}
        {children}
      </body>
    </html>
  );
}