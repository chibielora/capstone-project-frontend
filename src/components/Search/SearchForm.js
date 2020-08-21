import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withRouter } from 'react-router-dom'

import { searchUser } from '../../api/profile'

const styles = (theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
})

class Search extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    const searchData = {
      text: e.target.value
    }

    if (e.key === 'Enter') {
      searchUser(searchData, this.props.history)
    }
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search User"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onKeyPress={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Search))
