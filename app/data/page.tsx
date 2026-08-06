"use client";
import { useState } from "react";

export default function DataPage() {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const buyData = () => {
    if(!network || !phone || !plan) return alert("Please fill all fields");
    setLoading(true);
    setTimeout(() => {
      alert(`Buying ${plan} for ${phone} on ${network}\nNext: Connect VTpass API`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <button onClick={()=>window.location.href='/dashboard'} className="mb-4 text-blue-600 font-semibold">← Back to Dashboard</button>
      <h1 className="text-2xl font-bold mb-5">Buy Data</h1>
      
      <div className="bg-white p-5 rounded-lg shadow-md max-w-lg">
        <label className="font-semibold">Network</label>
        <select value={network} onChange={(e)=>setNetwork(e.target.value)} className="w-full p-3 mb-3 border rounded-md">
          <option value="">Select Network</option>
          <option value="mtn">MTN</option>
          <option value="glo">GLO</option>
          <option value="airtel">Airtel</option>
          <option value="9mobile">9mobile</option>
        </select>

        <label className="font-semibold">Phone Number</label>
        <input type="tel" value={phone} placeholder="080xxxxxxxx" onChange={(e)=>setPhone(e.target.value)} className="w-full p-3 mb-3 border rounded-md" />
        
        <label className="font-semibold">Data Plan</label>
        <select value={plan} onChange={(e)=>setPlan(e.target.value)} className="w-full p-3 mb-4 border rounded-md">
          <option value="">Select Data Plan</option>
          <option value="MTN 1GB - ₦350">MTN 1GB - ₦350</option>
          <option value="MTN 2GB - ₦700">MTN 2GB - ₦700</option>
          <option value="AIRTEL 1.5GB - ₦500">AIRTEL 1.5GB - ₦500</option>
          <option value="GLO 3GB - ₦1000">GLO 3GB - ₦1000</option>
          <option value="9MOBILE 1.5GB - ₦500">9MOBILE 1.5GB - ₦500</option>
        </select>

        <button onClick={buyData} disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700 disabled:bg-gray-400">
          {loading ? "Processing..." : "Buy Data Now"}
        </button>
      </div>
    </div>
  );
}
