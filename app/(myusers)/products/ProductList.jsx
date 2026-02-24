// =====================================
// FILE: app/(myusers)/products/ProductList.jsx - CLIENT COMPONENT
// =====================================
"use client";  // Required for hooks

import { useSearchParams } from "next/navigation";

// ⚠️ FIXED: Component name typo - was "ProudctList", now "ProductList"
const ProductList = () => {
    // ✅ useSearchParams() is a HOOK - must call it (was missing parentheses)
    const searchParams = useSearchParams();  // ✅ Added parentheses
    
    // Get individual params
    const category = searchParams.get('category') || 'all';
    const page = searchParams.getAll('page') || '1';
    const sort = searchParams.get('sort') || 'default';
    const entries = searchParams.get('entries') || "full"
    
    // 💡 This log appears in BROWSER CONSOLE (F12)
    console.log("🌐 ProductList client component - params:", {category, page, sort});
    



    return (
        <>
            <h1>Client Component Inside{category} Products</h1>
            <div className="bg-gray-100 p-4 rounded">
                <h2 className="font-bold">Current Filters (from client):</h2>
                <p>Category: {category}</p>
                <p>Page: {page}</p>
                <p>Sort: {sort}</p>
            </div>
            
            {/* Add filter controls here */}
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => alert('Add filter logic here!')}>
                    Apply Filters
                </button>
            </div>
        </>
    );
};

export default ProductList;  // ✅ Fixed export name