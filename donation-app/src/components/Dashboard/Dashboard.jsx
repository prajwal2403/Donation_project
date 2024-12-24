// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div style={styles.dashboard}>
            <h1 style={styles.welcome}>Welcome, {user.name}!</h1>
            <div style={styles.content}>
                <h2>Goal Achieved</h2>
                <p>Total Donations via Your Referral Code: ${user.totalDonations}</p>
                <button style={styles.button}>Copy Donation Link</button>
                <button style={styles.button}>Share on WhatsApp</button>
                <p>Your Referral Code: {user.referralCode}</p>
            </div>
        </div>
    );
};

const styles = {
    dashboard: {
        marginLeft: '250px',
        padding: '20px',
    },
    welcome: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    content: {
        textAlign: 'center',
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Dashboard;
