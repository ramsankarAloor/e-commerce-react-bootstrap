import React, { useState } from "react";

const AuthContext = React.createContext({
    token : null,
    email: null,
    isLoggedIn : false,
    login: (token)=>{},
    logout: ()=>{}
})

export const AuthContextProvider=props=>{
    const cleanedEmail = localStorage.getItem('email')
    const iniToken = localStorage.getItem('token')
    const [token, setToken] = useState(iniToken)
    const [email, setEmail] = useState(cleanedEmail)

    const isLoggedIn = !!token

    const login=(t, cleanedEmail)=>{
        localStorage.setItem('token', t)
        localStorage.setItem('email', cleanedEmail)
        setToken(t)
        setEmail(cleanedEmail)
    }

    const logout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setToken(null)
        setEmail(null)
    }

    const authContext = {
        token,
        email,
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