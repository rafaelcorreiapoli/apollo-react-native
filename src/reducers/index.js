import { combineReducers } from 'redux'
import drawerLayout from '@ui/DrawerLayout/reducer'
import client from '@apollo/client'


export default combineReducers({
  drawerLayout,
  apollo: client.reducer(),
})
