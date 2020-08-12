import {
  ADD_POST,
  LOADING_POSTS,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST
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

export const deletePost = postId => ({
  type: DELETE_POST,
  payload: postId
})

export const editPost = post => ({
  type: EDIT_POST,
  payload: post
})
