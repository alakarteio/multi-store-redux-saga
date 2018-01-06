import { select } from 'redux-saga/effects'

/* router */
export const checkLocationChange = action => action.type === 'ROUTER_LOCATION_CHANGED'

export const checkLocation = title => action =>
  checkLocationChange(action) &&
  action.payload.result &&
  action.payload.result.title === title

export const logger = name => function* (action) {
  const state = yield select()
  console.log(`${name} action`, action)
  console.log(`${name} state after`, state)
}

