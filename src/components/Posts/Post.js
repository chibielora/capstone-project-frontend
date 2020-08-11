import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const styles = {
  body: {
    width: '100%'
  },
  paper: {
    padding: 10,
    display: 'flex',
    marginTop: 10
  },
  avatar: {
    minWidth: 10,
    margin: '4px 10px 4px 4px'
  },
  login: {
    marginBottom: 5
  },
  time: {
    marginLeft: 10,
    color: '#bbb',
    fontSize: 14
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  actionButton: {
    border: 'none',
    marginLeft: 5,
    background: 'none',
    color: '#08f'
  }
}

class Post extends Component {
  render () {
    const { auth, classes, post } = this.props

    const actions = (
      <div className={classes.actions}>
        <button className={classes.actionButton}>Edit</button>
        <button className={classes.actionButton}>Delete</button>
      </div>
    )
    return (
      <Paper className={classes.paper}>
        <div
          className={classes.avatar}
          style={{
            backgroundColor: `#${post.user._id.slice(post.user._id.length - 3)}`
          }}
        />
        <div className={classes.body}>
          <h3 className={classes.login}>
            <Link to={`/profile/${post.user._id}`}>{post.user.username}</Link>
            <span className={classes.time}>{(new Date(post.createdAt)).toLocaleString()}</span>
          </h3>
          {post.body}
          {
            auth.isAuthenticated &&
            post.user._id === auth.user._id &&
            actions
          }
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(withStyles(styles)(Post))
