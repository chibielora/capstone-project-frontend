import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreVert from '@material-ui/icons/MoreVert'

import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/messageActions'

import Search from '../Search/Search'

const styles = {
  root: {
    flexGrow: 1
  },
  logo: {
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase'
  },
  space: {
    justifyContent: 'space-between'
  }
}

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null
    }
    this.handlesignOut = this.handlesignOut.bind(this)
  }

handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget }) }

handleClose = () => { this.setState({ anchorEl: null }) }

handlesignOut () {
  this.setState({ anchorEl: null })
  this.props.signOutUser()
}
render () {
  const { classes, isAuthenticated, user } = this.props
  const { anchorEl } = this.state
  const open = Boolean(anchorEl)

  const guestLinks = (
    <div>
      <IconButton
        aria-owns={ open ? 'menu-appbar' : undefined }
        aria-haspopup="true"
        color="inherit"
        onClick={this.handleMenu}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="menu-appbar"
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        anchorEl={anchorEl}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>
          <Link to="/login">Log-in</Link>
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          <Link to="/sign-up">Sign Up!</Link>
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          <button onClick={() => this.props.addMessage({
            heading: 'Hello!',
            message: 'Foo'
          })}>
            Hello, world!
          </button>
        </MenuItem>
      </Menu>
    </div>
  )

  const authLinks = isAuthenticated && (
    <div>
      <IconButton
        aria-owns={ open ? 'menu-appbar' : undefined }
        aria-haspopup="true"
        color="inherit"
        onClick={this.handleMenu}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        anchorEl={anchorEl}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>
          <Link to={`/profile/${user._id}`}>Profile</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/#" onClick={this.handlesignOut}>signOut</Link>
        </MenuItem>
      </Menu>
    </div>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#4B0082' }}>
        <Toolbar className={classes.space}>
          <Link to="/" className={classes.logo}>Titter</Link>
          <Search />
          { isAuthenticated ? authLinks : guestLinks }
        </Toolbar>
      </AppBar>
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, { addMessage })(withStyles(styles)(Header))
