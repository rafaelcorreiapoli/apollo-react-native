import { handleActions } from 'redux-actions'
import { Map } from 'immutable'
import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
} from './actionTypes'

const initialState = Map({
  drawerOpen: false
})

export default handleActions({
  [OPEN_DRAWER]: (state, action) => state.set('drawerOpen', true),
  [CLOSE_DRAWER]: (state, action) => state.set('drawerOpen', false)
}, initialState)
