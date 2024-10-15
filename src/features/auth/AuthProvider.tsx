import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthContextProps } from '@/features/interfaces/AuthContextProps'; 

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (username: string) => {
        setUser(username);
        // login logic here, i.e., as calling an API
    };

    const logout = () => {
        setUser(null);
        // logout logic here, i.e., clearing tokens
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;
