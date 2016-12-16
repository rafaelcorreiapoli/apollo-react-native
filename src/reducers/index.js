import { combineReducers } from 'redux'
import { NavigationReducer } from '@exponent/ex-navigation'
import client from '@apollo/client'
import login from '@ui/Login/reducer'

export default combineReducers({
  apollo: client.reducer(),
  login,
  navigation: NavigationReducer
})
