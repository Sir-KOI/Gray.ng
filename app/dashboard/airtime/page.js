'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AirtimePage() {
  const [network, setNetwork] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleBuy = () => {
    if(!network ||!phone ||!amount) return alert('Fill all fields');
    alert(`Buying ₦${amount} Airtime for ${phone} on ${network}`);
    // TODO: Connect to VTU API here
    router.push('/dashboard/transactions');
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buy Airtime</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">

        <div>
          <label className="font-semibold">Select Network</label>
          <select value={network} onChange={e => setNetwork(e.target.value)} className="w-full border p-3 rounded-lg mt-2">
            <option value="">Choose Network</option>
            <option value="MTN">MTN</option>
            <option value="GLO">GLO</option>
            <option value="AIRTEL">AIRTEL</option>
            <option value="9MOBILE">9MOBILE</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="08012345678" className="w-full border p-3 rounded-lg mt-2"/>
        </div>

        <div>
          <label className="font-semibold">Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="100" className="w-full border p-3 rounded-lg mt-2"/>
        </div>

        <button onClick={handleBuy} className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700">
          Buy Now
        </button>
      </div>
    </div>
  )
}
