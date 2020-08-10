import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListPost from './Posts/ListPost'
import SignIn from './SignIn/SignIn'

class Home extends Component {
	
	render () {
		const { isAuthenticated } = this.props
		return (
			<div>
				{ isAuthenticated ? <ListPost /> : <SignIn/ > }
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home)