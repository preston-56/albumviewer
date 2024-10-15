import React from 'react';
import { useAuth } from '@/features/auth/AuthProvider';

const Logout: React.FC = () => {
    const { logout } = useAuth(); 

    const handleLogout = () => {
        logout(); 
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
