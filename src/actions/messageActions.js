import { ADD_MESSAGE } from '../constants'

export const addMessage = message => dispatch => dispatch({
  type: ADD_MESSAGE,
  payload: message
})
