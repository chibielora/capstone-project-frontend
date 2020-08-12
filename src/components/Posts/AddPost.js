import React from 'react'
import { withStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { addPost } from '../../api/post'
import PostForm from './PostForm'

const styles = {
  paper: {
    padding: 8
  }
}

const AddPost = ({ classes }) => (
  <Paper className={classes.paper}>
    <PostForm
      label="What's on your mind?"
      handleSubmit={body => addPost({ message: body })}
    />
  </Paper>
)

export default withStyles(styles)(AddPost)
