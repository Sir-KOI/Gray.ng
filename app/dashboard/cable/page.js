import Link from 'next/link'

export default function CableSubscriptionPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Cable TV Subscription</h1>
        
        <p className="text-gray-600 mb-6">
          Subscribe to DSTV, GOTV, and Startimes instantly.
        </p>

        {/* DISABLED BUTTON */}
        <button 
          disabled
          className="w-full bg-gray-400 cursor-not-allowed opacity-60 text-white font-semibold py-3 px-4 rounded-lg"
        >
          Cable TV Subscription - Coming Soon
        </button>

        <p className="text-sm text-center text-gray-500 mt-3">
          We are working to bring this back online. Check back soon!
        </p>
      </div>
    </div>
  )
}
