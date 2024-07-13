import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/config";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    },[])

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };