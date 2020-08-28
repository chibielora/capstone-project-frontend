import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
  render () {
    // console.log(typeof Profile)
    return (
      <Provider store={store}>
        <div>
          <Main>
            <main className="container">
              <Switch>
                <Route path='/sign-up' render={() => (
                  <SignUp />
                )} />
                <Route path='/sign-in' render={() => (
                  <SignIn />
                )} />
                <AuthenticatedRoute path='/sign-out' render={() => (
                  <SignOut />
                )} />
                <AuthenticatedRoute path='/change-password' render={() => (
                  <ChangePassword />
                )} />
                <Route exact path="/" render={() => (
                  <Home />
                )} />
                <Route path="/profile/:userId" render={(props) => {
                  // console.log(props)
                  return <Profile userId={props.match.params.userId}/>
                }} />
                <Route path="/search" render={() => (
                  <Search />
                )} />
                <Route render={() => (
                  <NotFound />
                )} />
              </Switch>
            </main>
          </Main>
        </div>
      </Provider>
    )
  }
}

export default App
