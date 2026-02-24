// =====================================
// FILE: app/(myusers)/layout.js - ROUTE GROUP LAYOUT
// =====================================
import { Roboto, Work_Sans } from 'next/font/google';
import Navigation from '../../components/navigation';

// These font configurations are needed for CSS variables to work
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',                         // ✅ Consistent with root layout
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',                         // ✅ Consistent with root layout
});

export default function MyUsersLayout({ children }) {
  return (
    <>
      <Navigation />                        {/* Navigation appears on all (myusers) pages */}
      {children}                            {/* Page content renders here */}
    </>
  );
}
// 💡 NOTE: No <html> or <body> tags here - root layout already provides them!