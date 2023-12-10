import { createContext, useState } from 'react';


export const usersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    return (
        <usersContext.Provider value={{ users, setUsers }}>
            {children}
        </usersContext.Provider>
    )
}


