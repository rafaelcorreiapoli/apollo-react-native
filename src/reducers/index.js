import { combineReducers } from 'redux'
import { NavigationReducer } from '@exponent/ex-navigation'
import drawerLayout from '@ui/DrawerLayout/reducer'
import client from '@apollo/client'
import login from '@ui/Login/reducer'

export default combineReducers({
  drawerLayout,
  apollo: client.reducer(),
  login,
  navigation: NavigationReducer
})
