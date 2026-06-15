// 1️⃣ UserContext Setup
import { createContext, useState } from "react";

//create context
export const UserContext = createContext();

//create Provider and pass children prop and wrap the prop in context.Provider.
export function UserProvider({children}){
    let [user, setUser] = useState('Md Touseef Akram');

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}