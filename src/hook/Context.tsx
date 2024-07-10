import React, {createContext, useState} from 'react';



interface TypeUser {
    name: string,
    email: string,
    password: string
}

interface TypeHooks {
    guser:  null
    setUser: React.Dispatch<React.SetStateAction<null>>,
    register: (user: TypeUser, callback: () => void) => void;
    logOut: (callback: () => void) => void;
}


export const CustomContext = createContext<TypeHooks | null>(null)
const Context = ({children}: any) => {

    const [user, setUser] = useState(null)


    const register = (user : any, callback: Function) => {
        setUser(user)
        callback()
    }

    const logOut = (callback: () => void) => {
        setUser(null)
        callback()
    }

    const value = {
        user,
        register,
        logOut,
        setUser
    }
    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    );
};

export default Context;