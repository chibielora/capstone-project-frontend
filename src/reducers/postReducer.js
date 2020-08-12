import {
  ADD_POST,
  LOADING_POSTS,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST
} from '../constants'

const initialState = {
  loading: false,
  list: []
}

export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_POST:
    return {
      ...state,
      list: [action.payload, ...state.list]
    }
  case LOADING_POSTS:
    return {
      ...state,
      loading: true
    }
  case GET_POSTS:
    return {
      ...state,
      loading: false,
      list: action.payload
    }
  case DELETE_POST:
    return {
      ...state,
      list: state.list.filter(post => post._id !== action.payload)
    }
  case EDIT_POST:
    return {
      ...state,
      list: state.list.map(post => {
        if (post._id === action.payload._id) {
          return {
            ...post,
            ...action.payload
          }
        } else {
          return post
        }
      })
    }
  default:
    return state
  }
}
