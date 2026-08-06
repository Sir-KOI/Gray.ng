'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DataPage() {
  const [network, setNetwork] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('');
  const router = useRouter();

  const plans = {
    MTN: [{name: '1GB - 30 Days', price: 1000}, {name: '2GB - 30 Days', price: 2000}],
    GLO: [{name: '1.5GB - 30 Days', price: 1000}, {name: '3GB - 30 Days', price: 2000}],
    AIRTEL: [{name: '1.5GB - 30 Days', price: 1000}, {name: '3GB - 30 Days', price: 2000}],
    '9MOBILE': [{name: '1GB - 30 Days', price: 1000}, {name: '2GB - 30 Days', price: 2000}],
  }

  const handleBuy = () => {
    if(!network ||!phone ||!plan) return alert('Fill all fields');
    alert(`Buying ${plan} for ${phone} on ${network}`);
    router.push('/dashboard/transactions');
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buy Data</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <select value={network} onChange={e => setNetwork(e.target.value)} className="w-full border p-3 rounded-lg">
          <option value="">Choose Network</option>
          <option value="MTN">MTN</option><option value="GLO">GLO</option><option value="AIRTEL">AIRTEL</option><option value="9MOBILE">9MOBILE</option>
        </select>
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" className="w-full border p-3 rounded-lg"/>
        <select value={plan} onChange={e => setPlan(e.target.value)} className="w-full border p-3 rounded-lg" disabled={!network}>
          <option value="">Select Data Plan</option>
          {network && plans[network]?.map(p => <option key={p.name} value={p.name}>{p.name} - ₦{p.price}</option>)}
        </select>
        <button onClick={handleBuy} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Buy Now</button>
      </div>
    </div>
  )
}
