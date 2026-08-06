"use client";
import { useState } from "react";

export default function AirtimePage() {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const buyAirtime = () => {
    alert(`Buying ₦${amount} airtime for ${phone} on ${network}`);
    // Next: connect VTpass API here
  };

  return (
    <div style={{ padding: "20px", background: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Buy Airtime</h1>
      
      <div style={{ background: "white", padding: "20px", borderRadius: "8px", maxWidth: "500px" }}>
        <select onChange={(e)=>setNetwork(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }}>
          <option>Select Network</option>
          <option value="mtn">MTN</option>
          <option value="glo">GLO</option>
          <option value="airtel">Airtel</option>
          <option value="9mobile">9mobile</option>
        </select>

        <input type="tel" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        
        <input type="number" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        <button onClick={buyAirtime} style={{ width: "100%", background: "#2563eb", color: "white", padding: "12px", border: "none", borderRadius: "5px", fontWeight: "bold" }}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
