import {
  ADD_MESSAGE
} from '../constants'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_MESSAGE:
    console.log(action)
    return [...state, action.payload]
  default:
    return state
  }
}
