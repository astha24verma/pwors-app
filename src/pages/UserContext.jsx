import React, { useState, createContext, useContext } from 'react';

// Create a context
export const UserContext = createContext();

// Custom hook to consume the context
export const useUserContext = () => useContext(UserContext);

// Create a context provider
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    console.log('UserContext:', UserContext);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/* Render the child components */}
        </UserContext.Provider>
    );
}
