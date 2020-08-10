import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './components/App/App'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

export const GET_ERRORS = 'GET_ERRORS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOADING_POSTS = 'LOADING_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POSTS = 'DELETE_POSTS'
export const EDIT_POSTS = 'EDIT_POSTS'
export const LOAD_PROFILE = 'LOAD_PROFILE'
export const GET_PROFILE = 'GET_PROFILE'
export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'

ReactDOM.render(appJsx, document.getElementById('root'))
