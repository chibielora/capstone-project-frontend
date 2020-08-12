import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

const styles = {
  textField: {
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#5b875b',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#8db58d'
    }
  }
}

class PostForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: props.body
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({ body: event.target.value })
  }
  render () {
    const { classes } = this.props
    return (
      <div>
        <TextField
          multiline
          fullWidth
          rowsMax="4"
          inputProps={{
            maxLength: 300
          }}
          label={this.props.label}
          className={classes.textField}
          onChange={this.handleChange}
          value={this.state.body}
        />
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => {
            this.setState({ body: '' })
            this.props.handleSubmit(this.state.body)
          }}
        >
          Send
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(PostForm)
