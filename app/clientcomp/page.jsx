// =====================================
// FILE: app/clientcomp/page.jsx - CLIENT COMPONENT
// =====================================
"use client";  // 🔴 This directive makes it a CLIENT COMPONENT

import {useState, useEffect} from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComp = () =>{
    // State hook - only works in client components
    const [postData, setPostData] = useState([]);
    
    // Effect hook - runs in browser after render
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch(URL);
            const data = await res.json();
            
            // 💡 This log appears in BROWSER CONSOLE (F12)
            console.log("🌐 Client Component - data fetched:", data.length);
            
            setPostData(data);  // Update state with fetched data
        };
        
        fetchData();
    }, []);  // Empty dependency array = runs once when component mounts

    return(
        <>
            <h1>Client components</h1>
            <p className="text-sm text-gray-500">(Data fetched in browser - check BROWSER CONSOLE F12)</p>

            {/* Interactive button works because this is a client component */}
            <button 
                className="bg-amber-500 text-black p-2"
                onClick={() => alert("Button clicked in browser!")}
            >
                click me
            </button>

            {/* Render the posts from state */}
            <ul className="grid grid-cols-3 gap-5">
                {postData.map((curElem, index) => {
                    return <li key={index}>{curElem.body}</li>
                })}
            </ul>
        </>
    );
};

export default ClientComp;