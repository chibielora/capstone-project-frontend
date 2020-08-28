import {
  LOAD_PROFILE,
  GET_PROFILE,
  FOLLOW,
  UNFOLLOW
} from '../constants'

const initialState = {
  loading: false,
  user: null
}

export default function (state = initialState, action) {
  // console.log(action)
  switch (action.type) {
  case LOAD_PROFILE:
    return {
      ...state,
      loading: true
    }
  case GET_PROFILE:
    return {
      ...state,
      loading: false,
      user: action.payload
    }
  case FOLLOW:
    // console.log({
    //   ...state,
    //   user: {
    //     ...state.user,
    //     followers: [
    //       ...state.user.followers,
    //       action.payload.followingUserId
    //     ]
    //   }
    // })
    return {
      ...state,
      user: {
        ...state.user,
        followers: [
          ...state.user.followers,
          action.payload.followingUserId
        ]
      }
    }
  case UNFOLLOW:
    return {
      ...state,
      user: {
        ...state.user,
        followers: state.user.followers.filter(userId => {
          return userId !== action.payload.unfollowingUserId
        })
      }
    }
  default:
    return state
  }
}
