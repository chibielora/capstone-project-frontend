import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreVert from '@material-ui/icons/MoreVert'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/messageActions'

import SearchForm from '../Search/SearchForm'
import Logo from './titter.png'

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
        <Link to="/sign-in">
          <MenuItem onClick={this.handleClose}>
            Sign In
          </MenuItem>
        </Link>
        <Link to="/sign-up">
          <MenuItem onClick={this.handleClose}>
            Sign Up
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )

  const authLinks = isAuthenticated && (
    <div>

      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            { user && <span className="text-light text-left">Welcome, {user.email}</span>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
        <Link to={`/profile/${user._id}`}>
          <MenuItem onClick={this.handleClose}>
            Profile
          </MenuItem>
        </Link>
        <Link to="/change-password">
          <MenuItem onClick={this.handleClose}>
            Change Password
          </MenuItem>
        </Link>
        <Link to="/sign-out">
          <MenuItem onClick={this.handleClose}>
            Sign Out
          </MenuItem>
        </Link>
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
                <img className={classes.logo} src={Logo}></img>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <SearchForm />
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
