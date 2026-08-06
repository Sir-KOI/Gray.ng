'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ElectricityPage() {
  const [disco, setDisco] = useState('');
  const [meter, setMeter] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleBuy = () => {
    if(!disco ||!meter ||!amount) return alert('Fill all fields');
    alert(`Buying ₦${amount} Electricity for ${meter} - ${disco}`);
    router.push('/dashboard/transactions');
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buy Electricity</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <select value={disco} onChange={e => setDisco(e.target.value)} className="w-full border p-3 rounded-lg">
          <option value="">Select Disco</option>
          <option value="EKEDC">EKEDC</option><option value="IKEDC">IKEDC</option><option value="IBEDC">IBEDC</option>
        </select>
        <input type="text" value={meter} onChange={e => setMeter(e.target.value)} placeholder="Meter Number" className="w-full border p-3 rounded-lg"/>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" className="w-full border p-3 rounded-lg"/>
        <button onClick={handleBuy} className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600">Buy Now</button>
      </div>
    </div>
  )
}
