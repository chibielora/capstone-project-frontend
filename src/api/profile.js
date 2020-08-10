import axios from 'axios'
import {
  GET_PROFILE,
  LOAD_PROFILE,
  GET_POSTS,
  LOADING_POSTS,
  FOLLOW,
  UNFOLLOW
} from './../index'
import apiUrl from '../apiConfig'


export const getUserProfile = (userId) => dispatch => {
  dispatch(loadProfile())
  axios({
    method: 'GET',
    url: apiUrl + `/users/${userId}`,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
  .then(res => dispatch({
    type: GET_PROFILE,
    payload: res.data
  }))
  .catch(() => this.props.msgAlert({
    heading: 'Failed to get user profile',
    message: messages.userFailure, // CHange this message
    variant: 'danger'
  }))
}

export const refreshUserProfile = (userId) => dispatch => {
  axios({
    method: 'GET',
    url: apiUrl + `/users/${userId}`,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
  .then(res => dispatch({
    type: GET_PROFILE,
    payload: res.data
  }))
  .catch(() => this.props.msgAlert({
    heading: 'Failed to refresh user profile',
    message: messages.userFailure, // CHange this message
    variant: 'danger'
  }))
}

export const getPostsByUserId = (userId) => dispatch => {
  dispatch(loadPosts())
  axios({
    method: 'GET',
    url: apiUrl + `posts/${userId}`,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
  .then(res => dispatch({
    type: GET_POSTS,
    payload: res.data
  }))
  .catch(() => this.props.msgAlert({
    heading: 'Failed to get post by user id',
    message: messages.userFailure, // CHange this message
    variant: 'danger'
  }))
}

export const followUser = (userId) => dispatch => {
  axios({
    method: 'POST',
    url: apiUrl + 'users/follow' + userId,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
  .then(res => dispatch({
    type: FOLLOW,
    payload: res.data.userId
  }))
  .catch(() => this.props.msgAlert({
    heading: 'Failed to follow user',
    message: messages.userFailure, // CHange this message
    variant: 'danger'
  }))
}

export const unfollowUser = (userId) => dispatch => {
  axios({
    method: 'POST',
    url: apiUrl + 'users/unfollow' + userId,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
  .then(res => dispatch({
    type: UNFOLLOW,
    payload: res.data.userId
  }))
  .catch(() => this.props.msgAlert({
    heading: 'Failed to unfollow user',
    message: messages.userFailure, // CHange this message
    variant: 'danger'
  }))
}

export const searchUser = (searchData, history) => dispatch => {
  axios({
    method: 'POST',
    url: apiUrl + 'users/search' + searchData,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
    .then(res => {
      history.push(`/profile/${res.data.userId}`)
    })
    .catch(err => history.push('/search'))
}

export const loadProfile = () => {
  return {
    type: LOAD_PROFILE
  }
}

export const loadPosts = () => {
  return {
    type: LOADING_POSTS
  }
}