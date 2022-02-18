// import internal modules
import axios from 'axios';
import { decodeToken } from 'react-jwt';

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const GetUserBalanceRequest = () => {
    return {
        type: 'GET_USER_BALANCE_REQUEST'
    }
}
export const GetUserBalanceResponse = (data) => {
    return {
        type: 'GET_USER_BALANCE_RESPONSE',
        payload: data
    }
}
export const GetUserBalanceError = (error) => {
    return {
        type: 'GET_USER_BALANCE_ERROR',
        payload: error
    }
}

export const GetUserBalance = () => {
    return (dispatch) => {
        dispatch(GetUserBalanceRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const userBalance = res.data?.data.balance
            dispatch(GetUserBalanceResponse(userBalance))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetUserBalanceError(message))
        })
    }
}