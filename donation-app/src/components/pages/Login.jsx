import React from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform authentication logic here
        navigate('/main'); // Navigate to the Main page
    };

    return (
        <div style={styles.loginPage}>
            <div style={styles.loginBox}>
                <h1 style={styles.loginTitle}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="username" style={styles.label}>Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.loginButton}>Login</button>
                </form>
                <p style={styles.signupText}>
                    Don't have an account?{' '}
                    <a href="/" style={styles.signupLink}>Sign up</a>
                </p>
            </div>
          
        </div>
    
    );
};

const styles = {
    loginPage: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to bottom right, skyblue, darkblue)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBox: {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        width: '300px',
        textAlign: 'center',
    },
    loginTitle: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'darkblue',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: 'darkblue',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        outline: 'none',
    },
    loginButton: {
        backgroundColor: 'skyblue',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
    },
    signupText: {
        marginTop: '15px',
        color: 'darkblue',
    },
    signupLink: {
        color: 'skyblue',
        textDecoration: 'none',
    },
};

export default Login;
