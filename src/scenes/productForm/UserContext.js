import React, { createContext, useContext } from 'react';


const UserContext = createContext();

export const UserProvider = ({ children }) => {

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
