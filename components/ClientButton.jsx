// components/ClientButton.jsx
"use client";

const ClientButton = () => {
  return (
    <button 
      className="bg-amber-500 text-black p-2"
      onClick={() => alert("hii")}
    >
      click me
    </button>
  );
};

export default ClientButton;