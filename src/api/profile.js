import axios from 'axios'
import apiUrl from '../apiConfig'
import messages from '../components/AutoDismissAlert/messages'
import store from '../store'
import * as ProfileActions from '../actions/profileActions'
import { addMessage } from '../actions/messageActions'
import { getPosts } from '../actions/postActions'
// import { LOAD_PROFILE, LOADING_POSTS } from '../constants'

export const getUserProfile = (userId) => {
  console.log('getUserProfile')
  store.dispatch(ProfileActions.loadingProfile())
  axios({
    method: 'GET',
    url: apiUrl + `/users/${userId}`
  })
    .then(res => store.dispatch(ProfileActions.getUserProfile(res.data.user)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to get user',
      message: messages.userFailure,
      variant: 'danger'
    })))
}

export const refreshUserProfile = (userId) => {
  axios({
    method: 'GET',
    url: apiUrl + `/users/${userId}`
  })
    .then(res => store.dispatch(ProfileActions.getUserProfile(res.data.user)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to refresh user profile',
      message: messages.userFailure,
      variant: 'danger'
    })))
}

export const getPostsByUserId = (userId) => {
  store.dispatch(ProfileActions.loadingPosts())
  axios({
    method: 'GET',
    url: apiUrl + `/users/${userId}/posts`
  })
    .then(res => {
      console.log(res.data)
      store.dispatch(getPosts(res.data.posts))
    })
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to get posts by user id',
      message: messages.userFailure,
      variant: 'danger'
    })))
}

export const followUser = (userId) => {
  axios({
    method: 'POST',
    url: apiUrl + '/users/follow' + userId
  })
    .then(res => store.dispatch(ProfileActions.followUser(userId))) // userId or res.data.user?
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to follow user',
      message: messages.userFailure,
      variant: 'danger'
    })))
}

export const unfollowUser = (userId) => {
  axios({
    method: 'POST',
    url: apiUrl + 'users/unfollow' + userId
  })
    .then(res => store.dispatch(ProfileActions.unfollowUser(userId))) // userId or res.data.user?
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to unfollow user',
      message: messages.userFailure,
      variant: 'danger'
    })))
}

export const searchUser = (searchData, history) => {
  axios({
    method: 'POST',
    url: apiUrl + 'users/search' + searchData
  })
    .then(res => {
      store.dispatch(history.push(`/profile/${res.data.userId}`))
    })
    .catch(next => store.dispatch(history.push('/search')))
}

// export const loadProfile = () => {
//   return {
//     type: LOAD_PROFILE
//   }
// }

// export const loadingPosts = () => {
//   return {
//     type: LOADING_POSTS
//   }
// }
