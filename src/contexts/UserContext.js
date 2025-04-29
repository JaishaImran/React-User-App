import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [requestId, setRequestId] = useState(null);  // State for request_id

  const saveUser = (userData) => {
    setUser(userData);
    console.log('UserContext User Data Saved:', userData);
  };

  const clearUser = () => {
    setUser(null);
    setRequestId(null);  // Clear the request_id when clearing user data
    console.log('User Data Cleared');
  };

  const saveRequestId = (id) => {
    setRequestId(id);
    console.log('Request ID Saved:', id);
  };

  const clearRequestId = () => {
    setRequestId(null);
    console.log('Request ID Cleared');
  };

  return (
    <UserContext.Provider value={{ user, requestId, saveUser, clearUser, saveRequestId, clearRequestId }}>
      {children}
    </UserContext.Provider>
  );
};
