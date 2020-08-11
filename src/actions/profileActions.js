import {
  GET_PROFILE,
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

export const refreshUserProfile = (user) => ({
  type: GET_PROFILE,
  payload: user
})

export const loadProfile = () => ({
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
