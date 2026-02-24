// =====================================
// FILE: app/servercomp/page.jsx - SERVER COMPONENT
// =====================================
import ClientButton from '@/components/ClientButton';  // Import client component for interactivity

// This is a SERVER COMPONENT (no "use client" directive)
// ✅ Runs on server, logs appear in TERMINAL, not browser console
const ServerComp = async() =>{
    const URL = "https://jsonplaceholder.typicode.com/posts";
    
    // Fetch happens on the server - faster, more secure
    const res = await fetch(URL);
    const data = await res.json();
    
    // 💡 This log appears in your TERMINAL, not browser console
    console.log("📟 Server Component - posts fetched:", data.length);
    
    return(
        <>
            <h1>Server components</h1>
            <p className="text-sm text-gray-500">(Data fetched on server - check TERMINAL for logs)</p>
            
            {/* ClientButton is a CLIENT COMPONENT - handles clicks in browser */}
            <ClientButton />
            
            {/* Data is rendered on server, sent as HTML to browser */}
            <ul className="grid grid-cols-3 gap-5">
                {data.map((curElem, index) =>{
                    return <li key={index}>{curElem.body}</li>
                })}
            </ul>
        </>
    );
};

export default ServerComp;