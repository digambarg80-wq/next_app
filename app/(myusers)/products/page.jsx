// app/(myusers)/products/ProductList.jsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductList = () => {
    const searchParams = useSearchParams();
    
    // Get values from URL or use defaults
    const category = searchParams.get('category') || 'all';
    const page = searchParams.get('page') || '1';
    const sort = searchParams.get('sort') || 'default';
    
    // State for products (you would fetch based on params)
    const [products, setProducts] = useState([]);
    
    // Fetch products when params change
    useEffect(() => {
        console.log("🌐 Fetching products with:", { category, page, sort });
        
        // Here you would fetch from your API with these params
        // Example: fetch(`/api/products?category=${category}&page=${page}&sort=${sort}`)
        
        // For now, just log them
        setProducts([]);
    }, [category, page, sort]); // Re-run when params change
    
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Product List (Client Component)</h2>
            
            {/* Display current filters */}
            <div className="bg-blue-100 p-4 rounded mb-4">
                <h3 className="font-semibold">Current Filters:</h3>
                <p>📁 Category: <span className="font-bold">{category}</span></p>
                <p>📄 Page: <span className="font-bold">{page}</span></p>
                <p>🔤 Sort: <span className="font-bold">{sort}</span></p>
            </div>
            
            {/* Filter Controls */}
            <div className="mb-6 space-x-2">
                <button 
                    onClick={() => {
                        // Update URL - this will trigger a re-render
                        const url = new URL(window.location.href);
                        url.searchParams.set('category', 'laptop');
                        url.searchParams.set('page', '2');
                        window.location.href = url.toString();
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Show Laptops Page 2
                </button>
                
                <button 
                    onClick={() => {
                        const url = new URL(window.location.href);
                        url.searchParams.set('category', 'electronics');
                        url.searchParams.set('page', '3');
                        url.searchParams.set('sort', 'price');
                        window.location.href = url.toString();
                    }}
                    className="bg-purple-500 text-white px-4 py-2 rounded"
                >
                    Electronics Page 3 (by price)
                </button>
            </div>
            
            {/* Product grid would go here */}
            <div className="grid grid-cols-3 gap-4">
                {products.length === 0 ? (
                    <p className="text-gray-500 col-span-3">
                        No products to display. Add fetch logic here!
                    </p>
                ) : (
                    products.map(p => <div key={p.id}>{p.name}</div>)
                )}
            </div>
        </div>
    );
};

export default ProductList;