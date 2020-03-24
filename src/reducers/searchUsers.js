const initialState = []

const searchUsers = (state=[], action) => {
    switch (action.type) {
        case 'SEARCH_USERS':
            return action.type
        default:
            return state
    }
}
export default searchUsers