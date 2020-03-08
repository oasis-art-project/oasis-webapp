import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { loadState } from './localStorage';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const middleware = [];

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  /* eslint-enable */

  return store;
}
