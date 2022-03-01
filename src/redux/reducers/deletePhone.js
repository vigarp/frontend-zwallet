const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchDeletePhone = (state = initialState, action={}) => {
    switch (action.type) {
        case 'DELETE_PHONE_REQUEST':
            return {...state, loading: true};
        case 'DELETE_PHONE_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'DELETE_PHONE_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchDeletePhone