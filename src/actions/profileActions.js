import {
  GET_PROFILE,
  CHANGE_PASSWORD,
  LOAD_PROFILE,
  LOADING_POSTS,
  FOLLOW,
  UNFOLLOW
} from '../constants'

export const getUserProfile = (user) => ({
  type: GET_PROFILE,
  payload: user
})

export const changePasswordUserProfile = (user) => ({
  type: CHANGE_PASSWORD,
  payload: user
})

export const refreshUserProfile = (user) => ({
  type: GET_PROFILE,
  payload: user
})

export const loadingProfile = () => ({
  type: LOAD_PROFILE
})

export const searchUser = (data) => ({
  type: LOAD_PROFILE,
  payload: data
})

export const loadingPosts = () => ({
  type: LOADING_POSTS
})

export const followUser = (followingUserId, followedUserId) => ({
  type: FOLLOW,
  payload: {
    followingUserId,
    followedUserId
  }
})

export const unfollowUser = (unfollowingUserId, unfollowedUserId) => ({
  type: UNFOLLOW,
  payload: {
    unfollowingUserId,
    unfollowedUserId
  }
})
