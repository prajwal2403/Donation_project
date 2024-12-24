import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { MOCK_TRANSACTIONS } from '../lib/mockData';
import TransactionList from '../components/transactions/TransactionList';

export default function Transactions() {
  const { user } = useAuth();

  const userTransactions = MOCK_TRANSACTIONS.filter(
    (t) => t.referral_code === user?.referral_code
  );

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Transactions</h1>
      <TransactionList transactions={userTransactions} />
    </div>
  );
}