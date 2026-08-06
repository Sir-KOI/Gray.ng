'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PaystackPop from '@paystack/inline-js';

export default function Dashboard() {
  const router = useRouter();
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState({ name: 'Gray CEO', email: 'ceo@gray.ng' });

  useEffect(() => {
    setBalance(2500.00);
  }, []);

  const fundWallet = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: user.email,
      amount: 500000, // 5000 NGN in kobo
      onSuccess: (transaction) => {
        alert('Payment Successful! Ref: ' + transaction.reference);
      },
      onCancel: () => {
        alert('Payment Cancelled');
      },
    });
  };

  // Same card style as your screenshot but with hover lift
  const cardClass = "bg-white p-6 rounded-2xl shadow-sm border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 cursor-pointer";

  const services = [
    { 
      title: "Fund Wallet", 
      desc: "Add money to wallet", 
      icon: "💰", 
      action: fundWallet 
    },
    { 
      title: "Buy Airtime", 
      desc: "Instant VTU top-up", 
      icon: "📱", 
      action: () => router.push('/dashboard/airtime') 
    },
    { 
      title: "Buy Data", 
      desc: "All networks available", 
      icon: "📶", 
      action: () => router.push('/dashboard/data') 
    },
    { 
      title: "Buy Electricity", 
      desc: "Pay your bills", 
      icon: "💡", 
      action: () => router.push('/dashboard/electricity') 
    },
    { 
      title: "Buy Cable", 
      desc: "DSTV, GOTV, Startimes", 
      icon: "📺", 
      action: () => router.push('/dashboard/cable') 
    },
    { 
      title: "Transactions", 
      desc: "View history", 
      icon: "📜", 
      action: () => router.push('/dashboard/transactions') 
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, {user.name} 👋</h1>
        <p className="text-gray-500">Here's what's happening with your wallet today</p>
      </div>

      {/* BALANCE CARD - Same purple/blue as your screenshot */}
      <div className="bg-linear-to-r from-purple-600 to-blue-600 p-6 rounded-2xl shadow-lg text-white mb-8">
        <p className="text-sm opacity-80">Wallet Balance</p>
        <h2 className="text-4xl font-bold mt-2">₦{balance.toLocaleString()}</h2>
        <button 
          onClick={fundWallet}
          className="mt-4 bg-white text-purple-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          + Fund Wallet
        </button>
      </div>

      {/* ACTION CARDS - 3 per row on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className={cardClass} onClick={service.action}>
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="font-bold text-lg text-gray-800">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
