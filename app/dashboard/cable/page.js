'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CablePage() {
  const [provider, setProvider] = useState('');
  const [smartcard, setSmartcard] = useState('');
  const [packageName, setPackageName] = useState('');
  const router = useRouter();

  const handleBuy = () => {
    if(!provider ||!smartcard ||!packageName) return alert('Fill all fields');
    alert(`Subscribing ${packageName} for ${smartcard} - ${provider}`);
    router.push('/dashboard/transactions');
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Buy Cable TV</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <select value={provider} onChange={e => setProvider(e.target.value)} className="w-full border p-3 rounded-lg">
          <option value="">Select Provider</option>
          <option value="DSTV">DSTV</option><option value="GOTV">GOTV</option><option value="STARTIMES">STARTIMES</option>
        </select>
        <input type="text" value={smartcard} onChange={e => setSmartcard(e.target.value)} placeholder="Smartcard/IUC Number" className="w-full border p-3 rounded-lg"/>
        <input type="text" value={packageName} onChange={e => setPackageName(e.target.value)} placeholder="Package e.g DStv Compact" className="w-full border p-3 rounded-lg"/>
        <button onClick={handleBuy} className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700">Buy Now</button>
      </div>
    </div>
  )
}
