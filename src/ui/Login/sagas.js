import { takeEvery, takeLatest, delay } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import {
  loginWithPasswordFail,
  logoutFail,
} from './actions'
import { LOGIN_WITH_PASSWORD_REQUEST, LOGOUT_REQUEST } from './actionTypes'
import { NavigationActions } from '@exponent/ex-navigation'
import { Router } from '@ui/Router'

function* loginWithPasswordHandler(action) {
   try {
      yield call(delay, 1000)
      const navigatorUID = yield select(state => {
        return state.navigation.currentNavigatorUID
      })
      yield put(NavigationActions.push(navigatorUID, Router.getRoute('restaurantes')))

   } catch (e) {
      const error = new Error(e.error)
      yield put(loginWithPasswordFail(error))
   }
}

function* logoutHandler(action) {
   try {
     const navigatorUID = yield select(state => state.navigation.currentNavigatorUID)
     yield put(NavigationActions.push(navigatorUID, Router.getRoute('login')))
   } catch (e) {
      const error = new Error(e.error)
      yield put(logoutFail(error))
   }
}


export default function* saga() {
  yield takeLatest(LOGIN_WITH_PASSWORD_REQUEST, loginWithPasswordHandler)
  yield takeLatest(LOGOUT_REQUEST, logoutHandler)
}
