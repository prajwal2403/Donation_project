import { useState, useEffect } from 'react';
import { mockAuth } from '../lib/authUtils';

export function useAuth() {
  const [user, setUser] = useState(mockAuth.getCurrentUser());

  useEffect(() => {
    // Check for user on mount
    setUser(mockAuth.getCurrentUser());
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    signOut: async () => {
      await mockAuth.signOut();
      setUser(null);
    }
  };
}