const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchUserPhone = (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_USER_PHONE_REQUEST':
            return {...state, loading: true};
        case 'GET_USER_PHONE_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'GET_USER_PHONE_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchUserPhone