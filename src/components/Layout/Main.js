import React from 'react'
import Grid from '@material-ui/core/Grid'
import Header from './Header'
import Footer from './Footer'
import Messages from '../Messages'

const Main = ({ children }) => (
  <div>
    <Header />
    <Messages />
    <Grid container justify="center">
      <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
        {children}
      </Grid>
    </Grid>
    <Footer />
  </div>
)

export default Main
