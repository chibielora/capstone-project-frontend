# How Redux Works

## SETUP

Create Store from a reducer
  The reducers define initial state by a default argument
Things subscribe to the store when they're created/mounted.
  For a React component, we use mapStateToProps: we are mapping the *state of the store* to the props of the component
  This can happen multiple times throughout a user experience

## DISPATCHING ACTIONS

Generate an action. An action is a plain JS object
Dispatch the action to the store
The store processes the action with the reducer
The reducer generates a new state for the store based on the old state and the action type and payload
All subscribers are given the new state so they can process how they want
  For components, this usually means re-rendering
