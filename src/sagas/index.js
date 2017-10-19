import { delay } from 'redux-saga'
import { takeEvery, call, put, select } from 'redux-saga/effects'
import * as api from '../api'
import * as actions from '../actions'
import * as selectors from '../selectors'

export function* fetchQuoteItems () {
  const isFetching = yield select(selectors.isFetchingQuoteItems)
  if (isFetching) {
    return
  }
  try {
    // Fetching quotes true so we can show a spinner
    yield put(actions.fetchingQuoteItems(true))
    // Delay 2s so we can see the spinner running
    yield call(delay, 2000)
    // Call API to get the quote items
    const items = yield call(api.getQuoteItems)
    // Dispatch action to store quote items in the store
    yield put(actions.receiveQuoteItems(items))
  } catch (error) {
    console.log(error)
  } finally {
    // Finally we update the state
    yield put(actions.fetchingQuoteItems(false))
    // And restore update state to false
    yield put(actions.changeEditMode(false))
  }
}

export default function* rootSaga () {
  yield takeEvery(actions.FETCH_QUOTES, fetchQuoteItems)
}
