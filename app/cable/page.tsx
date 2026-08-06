"use client";
import { useState } from "react";

export default function CablePage() {
  const [provider, setProvider] = useState("");
  const [smartcard, setSmartcard] = useState("");
  const [packageName, setPackageName] = useState("");
  const [loading, setLoading] = useState(false);

  const buyCable = () => {
    if(!provider || !smartcard || !packageName) return alert("Please fill all fields");
    setLoading(true);
    setTimeout(() => {
      alert(`Subscribing ${packageName} to ${smartcard} on ${provider}\nNext: Connect VTpass API`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <button onClick={()=>window.location.href='/dashboard'} className="mb-4 text-blue-600 font-semibold">← Back to Dashboard</button>
      <h1 className="text-2xl font-bold mb-5">Cable TV Subscription</h1>
      
      <div className="bg-white p-5 rounded-lg shadow-md max-w-lg">
        <label className="font-semibold">Cable Provider</label>
        <select value={provider} onChange={(e)=>setProvider(e.target.value)} className="w-full p-3 mb-3 border rounded-md">
          <option value="">Select Provider</option>
          <option value="dstv">DSTV</option>
          <option value="gotv">GOTV</option>
          <option value="startimes">Startimes</option>
        </select>

        <label className="font-semibold">Smartcard/IUC Number</label>
        <input type="text" value={smartcard} placeholder="Enter Smartcard No" onChange={(e)=>setSmartcard(e.target.value)} className="w-full p-3 mb-3 border rounded-md" />
        
        <label className="font-semibold">Subscription Package</label>
        <select value={packageName} onChange={(e)=>setPackageName(e.target.value)} className="w-full p-3 mb-4 border rounded-md">
          <option value="">Select Package</option>
          <option value="DSTV Padi - ₦3,600">DSTV Padi - ₦3,600</option>
          <option value="DSTV Compact - ₦15,700">DSTV Compact - ₦15,700</option>
          <option value="GOTV Jolli - ₦4,600">GOTV Jolli - ₦4,600</option>
          <option value="GOTV Max - ₦6,900">GOTV Max - ₦6,900</option>
          <option value="Startimes Basic - ₦2,900">Startimes Basic - ₦2,900</option>
        </select>

        <button onClick={buyCable} disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700 disabled:bg-gray-400">
          {loading ? "Processing..." : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
}
