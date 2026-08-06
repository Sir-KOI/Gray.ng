'use client';
import { useState, useEffect } from 'react';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all'); // all, airtime, data, wallet

  useEffect(() => {
    // For now use dummy data. Later we’ll connect to API
    setTransactions([
      {id: 1, type: 'wallet', desc: 'Wallet Funding', amount: 5000, date: '2026-08-05', status: 'Success'},
      {id: 2, type: 'airtime', desc: 'MTN Airtime', amount: -500, date: '2026-08-04', status: 'Success'},
      {id: 3, type: 'data', desc: 'GLO 2GB Data', amount: -1000, date: '2026-08-03', status: 'Failed'},
    ]);
  }, []);

  const filtered = transactions.filter(tx => filter === 'all' ? true : tx.type === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      
      {/* FILTER BUTTONS */}
      <div className="flex gap-3 mb-6">
        {['all','wallet','airtime','data'].map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg capitalize ${filter === f ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(tx => (
              <tr key={tx.id} className="border-t">
                <td className="p-3">{tx.desc}</td>
                <td className={`p-3 font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>₦{Math.abs(tx.amount)}</td>
                <td className="p-3">{tx.date}</td>
                <td className={`p-3 ${tx.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
