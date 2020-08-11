import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Main from '../Layout/Main'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import store from '../../store'
// import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Search from '../Search/NotFound'
import NotFound from '../NotFound/NotFound'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Main>
              <main className="container">
                <Switch>
                  {/* <Header user={user} /> */}
                  <Route path='/sign-up' render={() => (
                    <SignUp setUser={this.setUser} />
                  )} />
                  <Route path='/sign-in' render={() => (
                    <SignIn setUser={this.setUser} />
                  )} />
                  <AuthenticatedRoute user={user} path='/sign-out' render={() => (
                    <SignOut clearUser={this.clearUser} user={user} />
                  )} />
                  <AuthenticatedRoute user={user} path='/change-password' render={() => (
                    <ChangePassword user={user} />
                  )} />
                  <Route exact path="/" component={Home} />
                  <Route path="/profile/:userId" component={Profile} />
                  <Route path="/search" component={Search} />
                  <Route component={NotFound}/>
                </Switch>
              </main>
            </Main>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
