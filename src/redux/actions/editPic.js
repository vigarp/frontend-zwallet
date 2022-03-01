// import internal modules
import axios from "axios";
import { decodeToken } from "react-jwt";
import { GetUserDetail } from "./user";

const tokenUser = localStorage.getItem('token');
const userInfo = decodeToken(tokenUser);

export const editPicRequest = () => {
    return {
        type: 'EDIT_PIC_REQUEST'
    }
}
export const editPicResponse = (data) => {
    return {
        type: 'EDIT_PIC_RESPONSE',
        payload: data
    }
}
export const editPicError = (error) => {
    return {
        type: 'EDIT_PIC_ERROR',
        payload: error
    }
}

export const editPic = (formDataPic, setLoading, openModal) => {
    return (dispatch) => {
        dispatch(editPicRequest())
        return axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_URL_BACKEND}/users/${userInfo.id}/picture`,
            data: formDataPic,
            headers: {Authorization: 'Bearer ' + tokenUser}
        })
        .then((res) => {
            setLoading(false)
            const resultEditPic = res.data?.message
            dispatch(editPicResponse(resultEditPic))
            alert(resultEditPic)
            openModal(false)
            dispatch((GetUserDetail()))
        })
        .catch((err) => {
            setLoading(false)
            const message = err.response.data.message
            dispatch(editPicError(message))
            alert(message)
        })
    }
}