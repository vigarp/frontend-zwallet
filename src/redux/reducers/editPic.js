const initialState = {
    data: [],
    loading: false,
    error: false
}

const FetchEditPic = (state = initialState, action={}) => {
    switch (action.type) {
        case 'EDIT_PIC_REQUEST':
            return {...state, loading: true};
        case 'EDIT_PIC_RESPONSE':
            return {...state, loading: false, data: action.payload};
        case 'EDIT_PIC_ERROR':
            return {...state, loading: false, error: action.payload, data: []};
        default:
            return state;
    }
}

export default FetchEditPic