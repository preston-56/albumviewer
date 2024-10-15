import React, { useState } from 'react';
import { SignupProps } from '@/features/interfaces/SignupProps'; 

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate input
        if (username && password) {
            onSignup(username, password); 
            setUsername('');
            setPassword('');
        } else {
            setErrorMessage('Please enter both a username and a password.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded shadow">
            <h2 className="text-2xl mb-4">Signup</h2>
            <form onSubmit={handleSignup}>
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
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
