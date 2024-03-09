import React, { useState } from "react";

const AuthContext = React.createContext({
    token : null,
    isLoggedIn : false,
    login: (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=props=>{
    const iniToken = localStorage.getItem('token')
    const [token, setToken] = useState(iniToken)

    const isLoggedIn = !!token

    const login=(t)=>{
        localStorage.setItem('token', t)
        setToken(t)
    }

    const logout=()=>{
        localStorage.removeItem('token')
        setToken(null)
    }

    const authContext = {
        token,
        isLoggedIn,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext