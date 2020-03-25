const initialState = []

const searchUsers = (state=initialState, action) => {
    switch (action.type) {
        case 'SEARCH_USERS':
            return action.payload
        default:
            return state
    }
}
export default searchUsers