import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/Login');
    };

    return <Register handleClick={handleClick} />;
}

function Register({ handleClick }) {
    return (
        <div style={styles.registerPage}>
            <div style={styles.registerBox}>
                <h1 style={styles.registerTitle}>Register</h1>
                <form>
                    <div style={styles.formGroup}>
                        <label htmlFor="userid" style={styles.label}>User ID</label>
                        <input
                            type="text"
                            id="userid"
                            placeholder="Enter your user ID"
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
                    <div style={styles.formGroup}>
                        <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            style={styles.input}
                        />
                    </div>
                    <button onClick={handleClick} type="submit" style={styles.registerButton}>
                        Create Account
                    </button>
                </form>
                <p style={styles.loginText}>
                    Already have an account? <a href="#" style={styles.loginLink}>Log in</a>
                </p>
            </div>
        </div>
    );
}

const styles = {
    registerPage: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to bottom right, skyblue, darkblue)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerBox: {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        width: '300px',
        textAlign: 'center',
    },
    registerTitle: {
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
    registerButton: {
        backgroundColor: 'skyblue',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
    },
    loginText: {
        marginTop: '15px',
        color: 'darkblue',
    },
    loginLink: {
        color: 'skyblue',
        textDecoration: 'none',
    },
};

export default Home;
