const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchEditPhone = (state = initialState, action={}) => {
    switch (action.type) {
        case 'EDIT_PHONE_REQUEST':
            return {...state, loading: true};
        case 'EDIT_PHONE_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'EDIT_PHONE_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchEditPhone