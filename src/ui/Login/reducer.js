import { handleActions } from 'redux-actions'
import { Map } from 'immutable'
import {
  LOGIN_WITH_PASSWORD_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionTypes'

const initialState = Map({
  token: null
})

export default handleActions({
  [LOGIN_WITH_PASSWORD_SUCCESS]: (state, action) => state.set('token', action.payload.token),
  [LOGOUT_SUCCESS]: (state, action) => state.set('token', null)
}, initialState)
