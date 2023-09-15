import React, { createContext, useContext } from 'react';

// Create a context for user data
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Assuming userEmail is available from your data source
  const userEmail = 'user@example.com';

  return (
    <UserContext.Provider value={{ userEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
