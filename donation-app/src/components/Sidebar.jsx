// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaMoneyCheckAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div style={styles.sidebar}>
            <h2 style={styles.title}>Menu</h2>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/dashboard" style={styles.navLink}>
                        <FaTachometerAlt style={styles.icon} /> Dashboard
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/transactions" style={styles.navLink}>
                        <FaMoneyCheckAlt style={styles.icon} /> Transactions
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/transactions" style={styles.navLink}>
                         Start Here
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/transactions" style={styles.navLink}>
                        FAQ
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/transactions" style={styles.navLink}>
                        Learning Modeules
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/transactions" style={styles.navLink}>
                         Rewards
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/transactions" style={styles.navLink}>
                        Feedback
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const styles = {
    sidebar: {
        width: '250px',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        position: 'fixed',
    },
    title: {
        marginBottom: '30px',
        fontSize: '24px',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        width: '100%',
    },
    navItem: {
        width: '100%',
    },
    navLink: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 20px',
        color: '#ecf0f1',
        textDecoration: 'none',
        width: '100%',
    },
    icon: {
        marginRight: '10px',
    },
};

export default Sidebar;
