import apiUrl from '../apiConfig'
import axios from 'axios'
import setAuthHeader from '../utils/setAuthHeader'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: { credentials }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: { credentials }
  })
    .then(res => {
      setAuthHeader(res.data.user.token)
      return res
    })
}

export const signOut = () => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE'
  })
    .then(res => {
      setAuthHeader(null)
      return res
    })
}

export const changePassword = passwords => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    data: { passwords }
  })
}
