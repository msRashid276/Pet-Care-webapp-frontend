import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({});

export function AuthProvider({children}){

    const[auth,setAuth] = useState({
        token:'',
        firstName:'',
        email:'',
        role:''
    })

    useEffect(()=>{
       const savedAuth = localStorage.getItem("auth")
       if(savedAuth){
        setAuth(JSON.parse(savedAuth));
       }
    },[])

    return(
        <div>
            <AuthContext.Provider value={{auth,setAuth}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContext;