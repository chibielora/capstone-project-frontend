import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import { Link } from 'react-router-dom'
import { updatePost, deletePost } from '../../api/post'
import {
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core'
import PostForm from './PostForm'
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
  },
  dialog: {
    minWidth: 600
  }
}

class Post extends Component {
  constructor (props) {
    super(props)

    this.state = {
      editDialogOpen: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOpen () {
    this.setState({ editDialogOpen: true })
  }

  handleClose () {
    this.setState({ editDialogOpen: false })
  }

  handleSubmit (body) {
    updatePost({
      _id: this.props.post._id,
      body: body
    })
      .then(() => this.setState({ editDialogOpen: false }))
  }

  render () {
    const { auth, classes, post } = this.props

    const actions = (
      <div className={classes.actions}>
        <IconButton aria-label="Edit" size="small" onClick={this.handleOpen}>
          <EditOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Delete" size="small" onClick={() => deletePost(post._id)}>
          <DeleteIcon />
        </IconButton>
        <Dialog
          open={this.state.editDialogOpen}
          onClose={this.handleClose}
        >
          <DialogTitle>Edit Post</DialogTitle>
          <DialogContent className={classes.dialog}>
            <PostForm
              label="What has brought you to confession today?"
              body={this.props.post.body}
              handleSubmit={this.handleSubmit}
            />
          </DialogContent>
        </Dialog>
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
