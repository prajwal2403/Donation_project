import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Transactions from './Transactions/TransactionList';

const Main = () => {
  const user = {
    name: 'John Doe',
    totalDonations: 500,
    referralCode: 'ABC123',
  };

  return (
    <Router>
      <div style={styles.app}>
        <Sidebar />
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  app: {
    display: 'flex',
  },
  mainContent: {
    marginLeft: '250px',
    padding: '20px',
    width: '100%',
  },
};

export default Main;