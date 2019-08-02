import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducer from "./reducers";
import { rootEpic } from "./epics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const middleware = [epicMiddleware];

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducer,
    compose(applyMiddleware(...middleware))
  );
  /* eslint-enable */

  epicMiddleware.run(rootEpic);

  return store;
}
