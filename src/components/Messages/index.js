import * as React from 'react'
import { connect } from 'react-redux'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'

const Messages = (props) => (
  <div className="foo">
    {props.messages.map((msgAlert, index) => (
      <AutoDismissAlert
        key={index}
        heading={msgAlert.heading}
        variant={msgAlert.variant}
        message={msgAlert.message}
      />
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Messages)
