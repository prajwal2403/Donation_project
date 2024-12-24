export interface User {
  id: string;
  email: string;
  full_name: string;
  referral_code: string;
  created_at: string;
}

export interface Transaction {
  id: string;
  donor_name: string;
  amount: number;
  referral_code: string;
  created_at: string;
}