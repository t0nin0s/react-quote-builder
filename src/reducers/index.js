import { combineReducers } from 'redux'
import quotes from './quotes'
import settings from './settings'

const reducers = combineReducers({
  quotes,
  settings
})

export default reducers
