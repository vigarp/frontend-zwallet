// import internal modules
import React, { createContext, useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';

export const userContext = createContext(null)

const UserContext = ({ children }) => {
    let token = localStorage.getItem('token')
    const [userName, setUserName] = useState(null)
    const [userPicture, setUserPicture] = useState(null)
    const [userEmail, setUserEmail] = useState(null)

    const userInfo = (decodeToken(token) || '')
    useEffect(() => {
        setUserName(userInfo.username || null)
        setUserEmail(userInfo.email || null)
        setUserPicture(userInfo.picture || null)

    })
    return (
        <userContext.Provider value={{ userName: userName, setUserName: setUserName, userPicture: userPicture, setUserPicture: setUserPicture, userEmail: userEmail, setUserEmail: setUserEmail }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
