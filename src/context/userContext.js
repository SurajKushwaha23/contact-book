"use client";
import { createContext, useContext, useState } from "react";

export const UserProfileContext = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserProfileContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
