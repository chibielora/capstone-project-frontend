import {
  GET_PROFILE,
  CHANGE_PASSWORD,
  LOAD_PROFILE,
  GET_POSTS,
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

export const getPosts = posts => ({
  type: GET_POSTS,
  payload: posts
})

export const getPostsByUserId = (userId) => ({
  type: GET_POSTS,
  payload: userId
})

export const loadingPosts = () => ({
  type: LOADING_POSTS
})

export const followUser = (userId) => ({
  type: FOLLOW,
  payload: userId
})

export const unfollowUser = (userId) => ({
  type: UNFOLLOW,
  payload: userId
})
