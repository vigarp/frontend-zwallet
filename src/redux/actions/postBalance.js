// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const PostBalanceRequest = () => {
    return {
        type: 'POST_BALANCE_REQUEST'
    }
}
export const PostBalanceResponse = (data) => {
    return {
        type: 'POST_BALANCE_RESPONSE',
        payload: data
    }
}
export const PostBalanceError = (error) => {
    return {
        type: 'POST_BALANCE_ERROR',
        payload: error
    }
}

export const PostBalance = (topUpValue) => {
    return (dispatch) => {
        dispatch(PostBalanceRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/topup`,
            data: {
                amount: topUpValue
            },
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
            .then((res) => {
                const resultTopUp = res.data?.message
                dispatch(PostBalanceResponse(resultTopUp))
                alert(resultTopUp)
            })
            .catch((err) => {
                const message = err.message
                dispatch(PostBalanceError(message))
                alert(message)
            })
    }
}