// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";

const tokenUser = localStorage.getItem('token');
const userInfor = decodeToken(tokenUser);

export const GetReceiverDetailRequest = () => {
    return {
        type: 'GET_RECEIVER_DETAIL_REQUEST'
    }
}
export const GetReceiverDetailResponse = (data) => {
    return {
        type: 'GET_RECEIVER_DETAIL_RESPONSE',
        payload: data
    }
}
export const GetReceiverDetailError = (error) => {
    return {
        type: 'GET_RECEIVER_DETAIL_ERROR',
        payload: error
    }
}

export const GetReceiverDetail = (idReceiver) => {
    return (dispatch) => {
        dispatch(GetReceiverDetailRequest())
        return axios({
            method: 'GET',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${idReceiver}`,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            const receiverData = res.data?.data
            dispatch(GetReceiverDetailResponse(receiverData))
        })
        .catch((err) => {
            const message = err.message
            dispatch(GetReceiverDetailError(message))
        })
    }
}