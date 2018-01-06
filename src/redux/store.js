import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { runSaga } from 'redux-saga'
import { initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import { enhancer, middleware } from './router'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    enhancer,
    applyMiddleware(middleware, sagaMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension({ name: 'main' }) : f => f,
  ),
)

sagaMiddleware.run(sagas)

/* runSaga({
  subscribe: store.subscribe,
  dispatch: store.dispatch,
  getState: store.getState,
}, sagas) */

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
