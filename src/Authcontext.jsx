import React,{ useContext, useState } from "react";
const AuthContext=React.createContext();

const AuthProvider = ({children})=>{
    const [isAuthentication, setIsAuthentication]=useState(false);
    const login=(token)=>{
        sessionStorage.setItem('authToken',token)
        setIsAuthentication(true);
    };
    const logout=()=>{
        setIsAuthentication(false);
        sessionStorage.removeItem('authToken')
    };
    return(
        <AuthContext.Provider value={{isAuthentication,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth=()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  
};
export {AuthProvider,useAuth}