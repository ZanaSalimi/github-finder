import { SEARCH_USERS, SINGLE_USER } from './actionTypes'

export const searchUsers = (text) => dispatch => {
    fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    .then(res=> res.json())
    .then(data => {
      dispatch({
          type: SEARCH_USERS,
          payload: data.items,
          loading: false
      })
    })
}