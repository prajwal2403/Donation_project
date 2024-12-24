import { MOCK_USERS } from './mockData';

export const mockAuth = {
  signIn: async (email: string, password: string) => {
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    // Store user data in localStorage for persistence
    localStorage.setItem('mockUser', JSON.stringify(user));
    return { user };
  },

  signUp: async (email: string, password: string, fullName: string) => {
    if (MOCK_USERS.some(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      email,
      password,
      full_name: fullName,
      referral_code: `REF${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    };
    MOCK_USERS.push(newUser);
    localStorage.setItem('mockUser', JSON.stringify(newUser));
    return { user: newUser };
  },

  getCurrentUser: () => {
    const userData = localStorage.getItem('mockUser');
    return userData ? JSON.parse(userData) : null;
  },

  signOut: async () => {
    localStorage.removeItem('mockUser');
  }
};