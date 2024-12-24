/*
  # Initial Schema Setup for NayePankh Foundation Portal

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - User's unique identifier
      - `email` (text) - User's email address
      - `full_name` (text) - User's full name
      - `referral_code` (text) - Unique referral code for tracking donations
      - `created_at` (timestamptz) - Account creation timestamp
    
    - `transactions`
      - `id` (uuid, primary key) - Transaction's unique identifier
      - `donor_name` (text) - Name of the donor
      - `amount` (numeric) - Donation amount
      - `referral_code` (text) - Reference to user's referral code
      - `created_at` (timestamptz) - Transaction timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for:
      - Users can read their own data
      - Users can read transactions linked to their referral code
      - Anyone can create transactions (for donations)
*/

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  referral_code text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text NOT NULL,
  amount numeric NOT NULL CHECK (amount > 0),
  referral_code text REFERENCES users(referral_code),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Users Policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Transactions Policies
CREATE POLICY "Users can read transactions with their referral code"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (
    referral_code IN (
      SELECT referral_code 
      FROM users 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Anyone can create transactions"
  ON transactions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);