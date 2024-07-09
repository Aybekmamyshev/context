import React, {createContext, useState} from 'react';



interface TypeHooks {
    user: null,
    setUser: React.Dispatch<React.SetStateAction<null>>
}


export const CustomContext = createContext<TypeHooks | null>(null)
const Context = ({children}: any) => {

    const [user, setUser] = useState(null)

    const  value = {
        user,
        setUser
    }
    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    );
};

export default Context;