import React from 'react';
import { Share2, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../hooks/useAuth';
import { MOCK_TRANSACTIONS } from '../lib/mockData';
import DonationStats from '../components/dashboard/DonationStats';
import TransactionList from '../components/transactions/TransactionList';

export default function Dashboard() {
  const { user } = useAuth();

  const userTransactions = MOCK_TRANSACTIONS.filter(
    (t) => t.referral_code === user?.referral_code
  );

  const totalDonations = userTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const copyReferralLink = () => {
    const link = `${window.location.origin}/donate/${user?.referral_code}`;
    navigator.clipboard.writeText(link);
    toast.success('Referral link copied to clipboard!');
  };

  const shareOnWhatsApp = () => {
    const link = `${window.location.origin}/donate/${user?.referral_code}`;
    const message = encodeURIComponent(
      `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${link} and make a difference!`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome, {user.full_name}!
        </h1>
        <p className="text-gray-600">Your referral code: {user.referral_code}</p>
      </div>

      <DonationStats 
        totalAmount={totalDonations} 
        donorCount={userTransactions.length} 
      />

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="space-y-4">
          <button
            onClick={copyReferralLink}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Donation Link
          </button>
          
          <button
            onClick={shareOnWhatsApp}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share on WhatsApp
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Transactions
        </h2>
        <TransactionList transactions={userTransactions.slice(0, 3)} />
      </div>
    </div>
  );
}