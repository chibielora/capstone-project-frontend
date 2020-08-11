// import apiUrl from '../apiConfig'
// import axios from 'axios'
import { SET_CURRENT_USER } from '../constants'
// import setAuthHeader from '../utils/setAuthHeader'

// export const signUp = (credentials, history) => {
//   return axios({
//     method: 'POST',
//     url: apiUrl + '/sign-up',
//     data: { credentials }
//   })
//     .then(res => history.push('/sign-in'))
// }

// export const signIn = credentials => dispatch => {
//   return axios({
//     url: apiUrl + '/sign-in',
//     method: 'POST',
//     data: { credentials }
//   })
//     .then(res => {
//       setAuthHeader(res.data.token)
//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: res.data
//       })
//     })
// }

// export const signOut = dispatch => {
//   return axios({
//     url: apiUrl + '/sign-out',
//     method: 'DELETE'
//   })
//     .then(res => {
//       setAuthHeader()
//       dispatch({
//         type: SET_CURRENT_USER,
//         payload: null
//       })
//     })
// }

// export const changePassword = passwords => {
//   return axios({
//     url: apiUrl + '/change-password',
//     method: 'PATCH',
//     data: { passwords }
//   })
// }

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})
