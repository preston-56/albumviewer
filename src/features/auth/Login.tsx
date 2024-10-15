import React, { useState } from 'react';
import { LoginProps } from '@/features/interfaces/LoginProps'; 

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username) {
            onLogin(username); 
            setUsername('');
        } else {
            setErrorMessage('Please enter a username.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded shadow">
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-1">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
