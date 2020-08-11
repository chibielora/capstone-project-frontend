import axios from 'axios'
import apiUrl from '../apiConfig'
import messages from '../components/AutoDismissAlert/messages'
import store from '../store'
import * as PostActions from '../actions/postActions'
import { addMessage } from '../actions/messageActions'

// export const deletePost = id => {
//   event.persist()
//   axios({
//     method: 'DELETE',
//     url: apiUrl + '/posts/' + id
//   })
// .then(res => dispatch({
//   type: DELETE_POSTS,
//   payload: res.data
// }))
// .then(() => this.props.msgAlert({
//   heading: 'Post Deleted',
//   message: messages.postSuccess, // CHange message
//   variant: 'success'
// }))
// .then(response => {
//   this.setState({
//     post: [...this.state.post.filter(post => post._id !== event.target.id)]
//   })
// })
// .catch(() => this.props.msgAlert({
//   heading: 'Delete Failure',
//   message: messages.postFailure, // Change message
//   variant: 'danger'
// }))
// }

export const addPost = post => {
  axios({
    method: 'POST',
    url: apiUrl + '/posts',
    data: { post }
  })
    .then(res => store.dispatch(PostActions.addPost(res.data.post)))
  // .then(() => this.props.getPost())
    .catch(() => store.dispatch(addMessage({
      heading: 'Create Failure',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    })))
}

// export const updatePost = (data, dispatch) => {
//   axios({
//     method: 'PATCH',
//     url: apiUrl + '/posts/:id',
//     headers: {
//       'Authorization': `Bearer ${this.props.user.token}`
//     },
//     data: {
//       post: {
//         body: data.body,
//         owner: data.owner
//       }
//     }
//   })
//     .then(res => dispatch({
//       type: EDIT_POSTS,
//       payload: res.data
//     }))
//     .then(() => this.props.getPost())
//     .catch(() => this.props.msgAlert({
//       heading: 'Create Failure',
//       message: messages.postFailure, // CHange this message
//       variant: 'danger'
//     }))
// }

export const getPosts = () => {
  store.dispatch(PostActions.loadingPosts())
  axios({
    method: 'GET',
    url: apiUrl + '/posts'
  })
    .then(res => store.dispatch(PostActions.getPosts(res.data.posts)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to get posts',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    })))
}

export const getPostsByFollowingUsers = () => dispatch => {
  store.dispatch(PostActions.loadingPosts())
  axios({
    method: 'GET',
    url: apiUrl + '/posts/following',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
    .then(res => store.dispatch(PostActions.getPosts(res.data.posts)))
    .catch(() => store.dispatch(addMessage({
      heading: 'Failed to show posts by following',
      message: messages.postFailure, // CHange this message
      variant: 'danger'
    })))
}
