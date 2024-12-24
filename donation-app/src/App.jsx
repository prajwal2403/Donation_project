// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './components/Dashboard/Dashboard';
// import Transactions from './components/Transactions/TransactionList';

// const App = () => {
//   const user = {
//     name: 'John Doe',
//     totalDonations: 500,
//     referralCode: 'ABC123',
//   };

//   return (
//     <Router>
//       <div style={styles.app}>
//         <Sidebar />
//         <div style={styles.mainContent}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard user={user} />} />
//             <Route path="/transactions" element={<Transactions />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// const styles = {
//   app: {
//     display: 'flex',
//   },
//   mainContent: {
//     marginLeft: '250px',
//     padding: '20px',
//     width: '100%',
//   },
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/pages/Register';
import LoginPage from './components/pages/Login';
import Main from "./components/Main"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />

       
      </Routes>
    </Router>
  );
};

export default App;
