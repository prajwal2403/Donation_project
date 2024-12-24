// Mock data for development
export const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'demo123',
    full_name: 'Demo User',
    referral_code: 'DEMO001'
  },
  {
    id: '2',
    email: 'test@example.com',
    password: 'test123',
    full_name: 'Test User',
    referral_code: 'TEST001'
  }
];

export const MOCK_TRANSACTIONS = [
  {
    id: '1',
    donor_name: 'John Doe',
    amount: 1000,
    referral_code: 'DEMO001',
    created_at: '2024-02-15T10:30:00Z'
  },
  {
    id: '2',
    donor_name: 'Jane Smith',
    amount: 2500,
    referral_code: 'DEMO001',
    created_at: '2024-02-14T15:45:00Z'
  },
  {
    id: '3',
    donor_name: 'Alice Johnson',
    amount: 5000,
    referral_code: 'DEMO001',
    created_at: '2024-02-13T09:20:00Z'
  },
  {
    id: '4',
    donor_name: 'Bob Wilson',
    amount: 1500,
    referral_code: 'TEST001',
    created_at: '2024-02-12T14:15:00Z'
  }
];