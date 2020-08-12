import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
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
    maxHeight: 64
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
          <Link to="/sign-in">Sign In</Link>
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          <Link to="/sign-up">Sign Up</Link>
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
          <Link to="/#" onClick={this.handlesignOut}>Sign Out</Link>
        </MenuItem>
      </Menu>
    </div>
  )
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#1b3b1a' }}>
        <Toolbar className={classes.space}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={4}>
              <Link to="/">
                <img className={classes.logo} src="/titter.png"></img>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Search />
            </Grid>
            <Grid container justify="flex-end" item xs={4}>
              { isAuthenticated ? authLinks : guestLinks }
            </Grid>
          </Grid>
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
