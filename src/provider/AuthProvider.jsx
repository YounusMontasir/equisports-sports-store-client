import React, { createContext } from 'react';
const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const info = {

    }
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;