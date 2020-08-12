import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import { setCurrentUser } from '../../actions/authActions'
import { addMessage } from '../../actions/messageActions'

class SignOut extends Component {
  componentDidMount () {
    console.log('Mounting SignOut')
    const { addMessage, history } = this.props

    signOut()
      .finally(() => this.props.setCurrentUser({}))
      .finally(() => addMessage({
        heading: 'Signed Out Successfully',
        message: messages.signOutSuccess,
        variant: 'success'
      }))
      .finally(() => history.push('/'))
  }

  render () {
    return ''
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(SignOut))
