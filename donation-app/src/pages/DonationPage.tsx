import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function DonationPage() {
  const { referralCode } = useParams();
  const [amount, setAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('transactions').insert([
        {
          donor_name: donorName,
          amount: parseFloat(amount),
          referral_code: referralCode,
        },
      ]);

      if (error) throw error;

      toast.success('Thank you for your donation!');
      setAmount('');
      setDonorName('');
    } catch (error) {
      toast.error('Failed to process donation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Make a Donation
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your support helps us make a difference
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleDonation}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="donor-name" className="sr-only">
                Your Name
              </label>
              <input
                id="donor-name"
                name="donorName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="amount" className="sr-only">
                Amount (₹)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                required
                min="1"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? 'Processing...' : 'Donate Now'}
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>Referral Code: {referralCode}</p>
        </div>
      </div>
    </div>
  );
}