// =====================================
// FILE: components/navigation.jsx - CLIENT COMPONENT
// =====================================
"use client";  // ✅ Good - uses Link which works in both, but safe to mark as client

import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <header className="grid grid-cols-2 p-4 border-b">
        <div className="font-bold">Digambar Gaikwad</div>
        <nav>
          <ul className="flex gap-6 justify-end">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link href="/servercomp" className="hover:text-blue-600">Server</Link></li>
            <li><Link href="/clientcomp" className="hover:text-blue-600">Client</Link></li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            // In components/navigation.jsx - add these links
<li><Link href="/products?category=laptop&page=2" className="hover:text-blue-600">Laptops Page 2</Link></li>
<li><Link href="/products?category=electronics&page=3&sort=price" className="hover:text-blue-600">Electronics by Price</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;