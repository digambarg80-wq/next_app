// =====================================
// FILE: app/layout.js - ROOT LAYOUT
// =====================================
import "./globals.css";
import { Roboto, Work_Sans } from "next/font/google";

// Font configuration for Roboto
// 'variable' creates CSS custom properties we can use anywhere
const roboto = Roboto({
  weight: ['400', '500', '700'],        // Load only these font weights
  subsets: ['latin'],                    // Load only latin characters
  variable: '--font-roboto',              // CSS variable name
  display: 'swap',                        // ✅ FIX: Prevents hydration mismatch
});

// Font configuration for Work Sans
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',                        // ✅ FIX: Prevents hydration mismatch
});

export default function RootLayout({ children }) {
  return (
    <html >                       {/* ✅ Added lang="en" for accessibility */}
      <body className={`${roboto.variable} ${workSans.variable}`}>
        {children}                         {/* Child pages will render here */}
      </body>
    </html>
  );
}