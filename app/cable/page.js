'use client'
import { useState } from "react"

export default function CablePage() {
  const [email, setEmail] = useState('')
  const [network, setNetwork] = useState('DSTV')
  const [smartcard, setSmartcard] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCableSubscription = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/cable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, network, smartcard, amount })
      })

      const data = await res.json()

      if(data.success) {
        alert('Cable Subscription Successful!')
        setEmail(''); setSmartcard(''); setAmount('')
      } else {
        alert('Error: ' + data.error)
      }
    } catch (err) {
      alert('Network error')
    }
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cable Subscription</h1>
      
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <select 
        value={network}
        onChange={(e) => setNetwork(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        <option>DSTV</option>
        <option>GOTV</option>
        <option>STARTIMES</option>
      </select>

      <input 
        type="text" 
        placeholder="Smartcard No" 
        value={smartcard}
        onChange={(e) => setSmartcard(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input 
        type="number" 
        placeholder="Amount" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button 
        onClick={handleCableSubscription}
        disabled={loading}
        className="bg-black text-white p-2 w-full rounded"
      >
        {loading ? 'Processing...' : 'Subscribe Now'}
      </button>
    </div>
  )
}
