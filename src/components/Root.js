import React from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import QuotesBuilderContainer from './QuoteBuilder/QuotesBuilderContainer'

const Root = ({ store }) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={QuotesBuilderContainer} />
          <Route path='/item/:itemId' render={({ match }) => (
            <h1>Item { match.params.itemId } detail</h1>
          )} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

Root.propTypes = {
  // store: React.propTypes.object
}

export default Root
