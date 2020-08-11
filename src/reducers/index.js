import { combineReducers } from 'redux'
import authReducer from './authReducer'
import messageReducer from './messageReducer'
import postReducer from './postReducer'
import profileReducer from './profileReducer'

export default combineReducers({
  auth: authReducer,
  messages: messageReducer,
  post: postReducer,
  profile: profileReducer
})
