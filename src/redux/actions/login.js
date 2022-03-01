// import internal modules
import axios from "axios";

export const LoginUserRequest = () => {
    return {
        type: 'LOGIN_USER_REQUEST'
    }
}
export const LoginUserResponse = (data) => {
    return {
        type: 'LOGIN_USER_RESPONSE',
        payload: data
    }
}
export const LoginUserError = (error) => {
    return {
        type: 'LOGIN_USER_ERROR',
        payload: error
    }
}

export const LoginUser = (loginData, setLoading) => {
    return (dispatch) => {
        dispatch(LoginUserRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_URL_BACKEND}/login`,
            data: {
                email: loginData.email,
                password: loginData.password
            }
        })
            .then((res) => {
                setLoading(false)
                const tokenUser = res.data?.data.token
                const resultLogin = res.data?.message
                localStorage.setItem('token', tokenUser)
                dispatch(LoginUserResponse(resultLogin))
                window.location.replace("/main")
            })
            .catch((err) => {
                setLoading(false)
                const message = err.message
                dispatch(LoginUserError(message))
                // if (err.response.status === 403) {
                //     alert(err.response.data.message)
                // } else {
                //     alert('Internal Server Error')
                // }
            })
    }
}