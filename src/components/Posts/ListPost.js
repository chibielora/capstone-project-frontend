import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import AddPost from './AddPost'
import Post from './Post'
import { connect } from 'react-redux'
import { getPosts, getPostsByFollowingUsers } from '../../api/post'
import LoadingPosts from './LoadingPosts'

class ListPost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allPosts: true
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ allPosts: event.target.checked })
  }

  componentDidMount () {
    getPosts()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.allPosts !== this.state.allPosts) {
      this.state.allPosts
        ? getPosts()
        : getPostsByFollowingUsers()
    }
  }

  render () {
    const { auth, list, loading } = this.props
    const { allPosts } = this.state
    const items = list && list.map(el => <Post key={el._id} post={el} />)
    return (
      <div>
        {auth.isAuthenticated && (
          <div>
            <AddPost />
            <FormControlLabel
              control={
                <Switch checked={allPosts} onChange={this.handleChange} />
              }
              label={allPosts ? 'All posts' : 'From following users'}
            />
          </div>
        )}
        { loading ? <LoadingPosts /> : items}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  list: state.post.list,
  loading: state.post.loading
})

export default connect(mapStateToProps)(ListPost)
