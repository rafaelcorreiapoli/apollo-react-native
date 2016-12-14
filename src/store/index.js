import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'

export default (initialState = {}) => {

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(rootReducer, initialState)


  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const reducers = require('../reducers/index').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
