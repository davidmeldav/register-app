import React, { createContext,useState,useContext } from "react";

const LoginAndSignUp = createContext();
export const LoginAndSignUpProvider =({ children })=> {
   const [users, getUsers] = useState(()=>{
    return false
  });
  const value={
    isAuth,
    setAuth: (value)=>{
      setisAuth(value)
    }
  }
  return (
    <LoginAndSignUp.Provider value={ value }>
      {children}
    </LoginAndSignUp.Provider>
  );
}

export const useLoginAndSignUp=()=>{
  
    return useContext(LoginAndSignUp);  

 
}
