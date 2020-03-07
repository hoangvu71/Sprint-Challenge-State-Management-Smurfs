const initalState = {
    isLoading: false,
    smurf: null,
    error: '',
}

export const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'FETCHING_SMURF_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCHING_SMURF_SUCCESS':
            return {
                ...state,
                isLoading: false,
                smurf: action.payload
            }
        case 'REMOVING_SMURF':
            return {
                ...state,
                smurf: state.smurf.filter(ele => ele.id !== action.payload.id)
            }
        default:
            return state
    }
}