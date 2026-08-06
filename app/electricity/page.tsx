"use client";
import { useState } from "react";

export default function ElectricityPage() {
  const [disco, setDisco] = useState("");
  const [meter, setMeter] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const buyElectricity = () => {
    if(!disco || !meter || !type || !amount) return alert("Please fill all fields");
    setLoading(true);
    setTimeout(() => {
      alert(`Buying ₦${amount} ${type} for ${meter} on ${disco}\nNext: Connect VTpass API`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <button onClick={()=>window.location.href='/dashboard'} className="mb-4 text-blue-600 font-semibold">← Back to Dashboard</button>
      <h1 className="text-2xl font-bold mb-5">Buy Electricity</h1>
      
      <div className="bg-white p-5 rounded-lg shadow-md max-w-lg">
        <label className="font-semibold">Distribution Company</label>
        <select value={disco} onChange={(e)=>setDisco(e.target.value)} className="w-full p-3 mb-3 border rounded-md">
          <option value="">Select Disco</option>
          <option value="ekedc">EKO DISCO</option>
          <option value="ikedc">IKEJA DISCO</option>
          <option value="aedc">ABUJA DISCO</option>
          <option value="bedc">BENIN DISCO</option>
        </select>

        <label className="font-semibold">Meter Number</label>
        <input type="text" value={meter} placeholder="Enter Meter No" onChange={(e)=>setMeter(e.target.value)} className="w-full p-3 mb-3 border rounded-md" />
        
        <label className="font-semibold">Meter Type</label>
        <select value={type} onChange={(e)=>setType(e.target.value)} className="w-full p-3 mb-3 border rounded-md">
          <option value="">Select Type</option>
          <option value="prepaid">Prepaid</option>
          <option value="postpaid">Postpaid</option>
        </select>

        <label className="font-semibold">Amount</label>
        <input type="number" value={amount} placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} className="w-full p-3 mb-4 border rounded-md" />

        <button onClick={buyElectricity} disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-700 disabled:bg-gray-400">
          {loading ? "Processing..." : "Buy Electricity"}
        </button>
      </div>
    </div>
  );
}
