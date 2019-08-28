import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers';
import { rootEpic } from './epics';
import { loadState } from './localStorage';

const persistedState = loadState();

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const middleware = [epicMiddleware];

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  /* eslint-enable */

  epicMiddleware.run(rootEpic);

  return store;
}
