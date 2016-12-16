import { createAction } from 'redux-actions'

import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
} from './actionTypes'

export const openDrawer = createAction(OPEN_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
