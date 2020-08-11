import {
  ADD_POST,
  LOADING_POSTS,
  GET_POSTS
} from '../constants'

export const addPost = post => ({
  type: ADD_POST,
  payload: post
})

export const loadingPosts = () => ({
  type: LOADING_POSTS
})

export const getPosts = posts => ({
  type: GET_POSTS,
  payload: posts
})
