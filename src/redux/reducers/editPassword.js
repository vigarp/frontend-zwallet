const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchEditPassword = (state = initialState, action={}) => {
    switch (action.type) {
        case 'EDIT_PASSWORD_REQUEST':
            return {...state, loading: true};
        case 'EDIT_PASSWORD_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'EDIT_PASSWORD_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchEditPassword