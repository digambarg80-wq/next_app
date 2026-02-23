// app/servercomp/page.jsx
import ClientButton from '@/components/ClientButton';  // Import the client component

const ServerComp = async() =>{
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(URL);
    const data = await res.json();
    
    return(
        <>
            <h1>Server components</h1>
            
            {/* Use the client component for interactive button */}
            <ClientButton />
            
            <ul className="grid grid-cols-3 gap-5">
                {data.map((curElem, index) =>{
                    return <li key={index}>{curElem.body}</li>
                })}
            </ul>
        </>
    );
};

export default ServerComp;