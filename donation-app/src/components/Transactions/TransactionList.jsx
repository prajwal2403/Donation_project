// src/components/Transactions.jsx
import React from 'react';

const TransactionList = () => {
    return (
        <div style={styles.transactions}>
            <h1>Transactions</h1>
            {/* Transactions content goes here */}
        </div>
    );
};

const styles = {
    transactions: {
        padding: '20px',
    },
};

export default TransactionList;
