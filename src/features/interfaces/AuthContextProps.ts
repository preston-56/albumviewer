export interface AuthContextProps {
    user: string | null;          // currently logged-in user, or null if not logged in
    login: (username: string) => void;  
    logout: () => void;           
}
