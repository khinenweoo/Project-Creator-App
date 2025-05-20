import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children, user }) => {
    const [userState, setUserState] = useState(user || {});

    return <UserContext.Provider value={{ userState, setUserState }}>{children}</UserContext.Provider>;
};
