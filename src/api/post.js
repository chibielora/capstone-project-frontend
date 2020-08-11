import axios from 'axios'
import apiUrl from '../apiConfig'
import messages from '../components/AutoDismissAlert/messages'
import {
  ADD_POST,
  GET_POSTS,
  DELETE_POSTS,
  EDIT_POSTS,
  LOADING_POSTS
} from '../constants'

export const deletePost = (event, dispatch) => {
  event.persist()
  axios({
    method: 'DELETE',
    url: apiUrl + '/posts/:id' + event.target.id,
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
    .then(res => dispatch({
      type: DELETE_POSTS,
      payload: res.data
    }))
    .then(() => this.props.msgAlert({
      heading: 'Post Deleted',
      message: messages.postSuccess, // CHange message
      variant: 'success'
    }))
    .then(response => {
      this.setState({
        post: [...this.state.post.filter(post => post._id !== event.target.id)]
      })
    })
    .catch(() => this.props.msgAlert({
      heading: 'Delete Failure',
      message: messages.postFailure, // Change message
      variant: 'danger'
    }))
}

export const addPost = (data, dispatch) => {
  axios({
    method: 'POST',
    url: apiUrl + '/posts',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    },
    data: {
      post: {
        body: data.body,
        owner: data.owner
      }
    }
  })
    .then(res => dispatch({
      type: ADD_POST,
      payload: res.data
    }))
    .then(() => this.props.getPost())
    .catch(() => this.props.msgAlert({
      heading: 'Create Failure',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    }))
}

export const updatePost = (data, dispatch) => {
  axios({
    method: 'PATCH',
    url: apiUrl + '/posts/:id',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    },
    data: {
      post: {
        body: data.body,
        owner: data.owner
      }
    }
  })
    .then(res => dispatch({
      type: EDIT_POSTS,
      payload: res.data
    }))
    .then(() => this.props.getPost())
    .catch(() => this.props.msgAlert({
      heading: 'Create Failure',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    }))
}
export const getPosts = dispatch => {
  dispatch(loadPosts)
  axios({
    method: 'GET',
    url: apiUrl + '/posts',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
    .then(res => dispatch({
      type: GET_POSTS,
      payload: res.data
    }))
    .catch(() => this.props.msgAlert({
      heading: 'Failed to get posts',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    }))
}

export const getPostsByFollowingUsers = () => dispatch => {
  axios({
    method: 'GET',
    url: apiUrl + '/posts/following',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
    .then(res => dispatch({
      type: GET_POSTS,
      payload: res.data
    }))
    .catch(() => this.props.msgAlert({
      heading: 'Failed to show posts by following',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    }))
}

export const loadPosts = () => {
  return {
    type: LOADING_POSTS
  }
}
