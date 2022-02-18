// import internal modules
import axios from 'axios';

const tokenUser = localStorage.getItem('token')


export const GetContactsRequest = ()=> {
    return {
        type: 'GET_CONTACTS_REQUEST'
    }
}
export const GetContactsResponse = (data)=> {
    return {
        type: 'GET_CONTACTS_RESPONSE',
        payload: data
    }
}
export const GetContactsError = (error)=> {
    return {
        type: 'GET_CONTACTS_ERROR',
        payload: error
    }
}


export const GetContacts = (querySearch)=> {
    return (dispatch) => {
        dispatch(GetContactsRequest())
        if(querySearch) {
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/users?limit=5&name=${querySearch}`,
                headers: {Authorization: 'Bearer ' + tokenUser}
            })
            .then((res)=> {
               const dataContacts =  res.data?.data
               dispatch(GetContactsResponse(dataContacts))
            })
            .catch((err)=>{
                const message =  err.message
                dispatch(GetContactsError(message))
            })
        } else {
            return axios({
                method: 'GET',
                url: `${process.env.REACT_APP_URL_BACKEND}/users`,
                headers: {Authorization: 'Bearer ' + tokenUser}
            })
            .then((res) => {
                const dataContacts = res.data?.data
                dispatch(GetContactsResponse(dataContacts))
            })
            .catch((err) => {
                const message = err.messages
                dispatch(GetContactsError(message))
            })
        }
    }
}