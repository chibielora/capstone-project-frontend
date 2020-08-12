import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './components/App/App'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter basename="/">
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
