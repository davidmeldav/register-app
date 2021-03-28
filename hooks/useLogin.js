import React, { createContext,useState,useContext } from "react";

const Login = createContext();
export const LoginProvider =({ children })=> {
   const [isAuth, setisAuth] = useState(()=>{
    return false
  });
  const [user, setCurrentUser] = useState(()=>{
    return ""
  });
  const value={
    isAuth,
    setAuth: (value)=>{
      setisAuth(value)
    },
    user,
    setCurrentUserAndSave:(value)=>{
        setCurrentUser(value)
      }
  }
  return (
    <Login.Provider value={ value }>
      {children}
    </Login.Provider>
  );
}


export const useLogin=()=>{
  
    return useContext(Login);  

 
}
