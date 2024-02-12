import { Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

const AuthContext = createContext({} as any);

export const AuthProvider = ({children}:any) => {

    const [token, setToken] = useState(null);
    const login = async(token: any) => {
        console.log(token)
        // setToken(token)
    };
    const logout = () => {
        setToken(null)
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;