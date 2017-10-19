import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'
import rootSaga from '../sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    applyMiddleware(
      sagaMiddleware,
      createLogger()
    )
  )
  sagaMiddleware.run(rootSaga)

  return {
    ...store
  }
}

export default configureStore
