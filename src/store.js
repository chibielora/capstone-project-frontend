import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store

// function createThunkMiddleware(extraArgument) {
//   return ({
//     dispatch,
//     getState
//   }) => next => action => {
//     // This gets called for every action you dispatch.
//     // If it's a function, call it.
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument);
//     }

//     // Otherwise, just continue processing this action as usual
//     return next(action);
//   };
// }

// const thunk = createThunkMiddleware();
// thunk.withExtraArgument = createThunkMiddleware;

// export default thunk;
