// import internal modules
import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import external modules
import { GetUserDetail } from '../redux/actions/user';

export const userContext = createContext(null)

const UserContext = ({ children }) => {
    const dispatch = useDispatch();
    
    const userDetailData = useSelector((state) => state.user);

    useEffect(() => {
        dispatch((GetUserDetail()))

    }, []);
    return (
        <userContext.Provider value={{ userName: userDetailData.data?.username, userPicture: userDetailData.data?.picture, userEmail: userDetailData.data?.email}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
