// src/context/UserContext.js

import { createContext, useState,useRef } from 'react';

// Context Create
const UserContext = createContext();

// Context Provider Component
const UserProvider = ({ children }) => {
  const Divlocation = useRef(null);

  return (
    <UserContext.Provider value={{ Divlocation }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
