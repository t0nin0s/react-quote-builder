import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore.dev'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
