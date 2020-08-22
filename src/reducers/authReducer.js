import {
  SET_CURRENT_USER,
  FOLLOW,
  UNFOLLOW
} from '../constants'

const initialState = {
  isAuthenticated: false,
  user: null
}

export default function (state = initialState, action) {
  console.log(action)
  switch (action.type) {
  case SET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: Object.keys(action.payload).length > 0,
      user: action.payload
    }
  case FOLLOW:
    return {
      ...state,
      user: {
        ...state.user,
        following: [
          ...state.user.following,
          action.payload.followedUserId
        ]
      }
    }
  case UNFOLLOW:
    return {
      ...state,
      user: {
        ...state.user,
        following: state.user.following.filter(userId => {
          return userId !== action.payload.unfollowedUserId
        })
      }
    }
  default:
    return state
  }
}
