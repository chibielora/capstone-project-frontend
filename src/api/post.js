import axios from 'axios'
import apiUrl from '../apiConfig'
import messages from '../components/AutoDismissAlert/messages'
import store from '../store'
import * as PostActions from '../actions/postActions'
import { addMessage } from '../actions/messageActions'

export const deletePost = id => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/posts/' + id
  })
    .then(res => store.dispatch(PostActions.deletePost(id)))
    .then(res => {
      store.dispatch(addMessage({
        heading: 'Post Deleted',
        message: messages.postSuccess, // Change message
        variant: 'success'
      }))
      return res
    })
    .catch(() => store.dispatch(addMessage({
      heading: 'Delete Failure',
      message: messages.postFailure, // Change message
      variant: 'danger'
    })))
}

export const addPost = post => {
  return axios({
    method: 'POST',
    url: apiUrl + '/posts',
    data: { post }
  })
    .then(res => store.dispatch(PostActions.addPost(res.data.post)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Create Failure',
      message: messages.postFailure,
      variant: 'danger'
    })))
}

export const updatePost = post => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/posts/' + post._id,
    data: { post }
  })
    .then(res => store.dispatch(PostActions.editPost(post)))
    .catch(() => this.props.msgAlert({
      heading: 'Create Failure',
      message: messages.postFailure,
      variant: 'danger'
    }))
}

export const getPosts = () => {
  store.dispatch(PostActions.loadingPosts())
  return axios({
    method: 'GET',
    url: apiUrl + '/posts'
  })
    .then(res => store.dispatch(PostActions.getPosts(res.data.posts)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to get posts',
      message: messages.postFailure,
      variant: 'danger'
    })))
}

export const getPostsByFollowingUsers = () => {
  store.dispatch(PostActions.loadingPosts())
  return axios({
    method: 'GET',
    url: apiUrl + '/posts/following'
  })
    .then(res => store.dispatch(PostActions.getPosts(res.data.posts)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to show posts by following',
      message: messages.postFailure,
      variant: 'danger'
    })))
}
