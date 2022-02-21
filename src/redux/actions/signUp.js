// import internal modules
import axios from "axios";

export const SignUpUserRequest = () => {
    return {
        type: 'SIGN_UP_USER_REQUEST'
    }
}
export const SignUpUserResponse = (data) => {
    return {
        type: 'SIGN_UP_USER_RESPONSE',
        payload: data
    }
}
export const SignUpUserError = (error) => {
    return {
        type: 'SIGN_UP_USER_ERROR',
        payload: error
    }
}

export const SignUpUser = (signupData) => {
    return (dispatch) => {
        dispatch(SignUpUserRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/register`,
            data: {
                username: signupData.username,
                email: signupData.email,
                password: signupData.password
            }
        })
        .then((res) => {
            const resultSignUp = res.data?.message
            dispatch(SignUpUserResponse(resultSignUp))
            alert(resultSignUp)
            window.location.replace("/auth/login")
        })
        .catch((err) => {
            const message = err.message
            dispatch(SignUpUserError(message))
            if (err.response.status === 403) {
                alert(err.response.data.message)
            } else {
                alert('Internal Server Error')
            }
        })
    }
}