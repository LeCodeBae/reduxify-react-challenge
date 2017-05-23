import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const middlewares = applyMiddleware(logger, thunk)

export default createStore(reducer, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// export default createStore(reducer, middlewares)